const Users = require('../models/Users');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {

        const userCreated = await Users.create({ name, email, password });
        const token = await userCreated.generateToken();
        return res.status(200).json({
            message: 'Account created successfully.',
            data: { email, name, token }
        });

    } catch (error) {
        console.error('Error in signup:', error);
        return res.status(500).json({ message: 'Internal Server Error' }); // Return added
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await Users.findOne({ email });

        if (!userExist) {
            return res.status(500).json({ message: 'Invalid Credentials' })
        }

        // If user exists, check the password
        const isPasswordValid = await userExist.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Wrong password" })
        }
        const token = await userExist.generateToken();
        const { name, liked, comments } = userExist;

        res.status(200).json({
            message: "Login successfull",
            data: { name, liked, comments, token }
        })

    } catch (error) {
        console.log('Error in login controller: ', error);
        return res.status(500).json({ message: 'Server Internal Error' });
    }

}

const resetPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email });

        // Compare the plaintext new password with the hashed password stored in the database
        const passValid = bcrypt.compareSync(password, user.password);

        if (passValid) {
            return res.status(409).json({ message: "New password is same as your current password." });
        }

        const hash_password = bcrypt.hashSync(password, Math.floor(Math.random() * 10));
        const result = await Sellers.updateOne({ email }, { password: hash_password });

        if (result && result.modifiedCount === 1) {
            return res.status(200).json({ message: "Password updated successfully." });
        } else {
            return res.status(500).json({ message: "Error updating password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error updating password." });
    }
};

const autoLogin = async (req, res) => {
    const userId = req.user.id; // Assuming parseToken middleware sets req.user.id

    try {
        const user = await Users.findById(userId).select('-password'); // exclude passwprd

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'Auto login successfull',
            data: { ...user }
        });

    } catch (error) {
        console.error('Error in auto login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    signup,
    login,
    resetPassword,
    autoLogin
};

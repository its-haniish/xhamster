const sendEmailFn = require('../utils/sendEmailFn.js');
const Users = require('../models/Users.js')

const sendEmail = async (req, res) => {
    const { email, subject, msg, type } = req.body;
    try {

        const doesEmailExist = await Users.findOne({ email });

        if (type === "signup") {
            if (doesEmailExist) {
                return res.status(409).json({ message: 'Email already in use.' }); // Return added
            }

        }

        if (type === "forget") {
            if (!doesEmailExist) {
                return res.status(409).json({ message: 'Email is not registered.' }); // Return added
            }
        }

        await sendEmailFn({ email, subject, msg })
            .then(() => {
                res.status(200).json({
                    message: "Message sent successfully",
                })
            })
            .catch(() => {
                console.log(error);
                return res.status(500).json({
                    message: "Failed to send message"
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

module.exports = { sendEmail };
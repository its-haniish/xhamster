const Creators = require('../models/Creators');

const getCreators = async (req, res) => {
    try {
        const creators = await Creators.find().sort({ createdAt: -1 });
        res.status(200).json({ message: 'Creators fetched successfully', data: creators });
    } catch (err) {
        console.error('Error fetching creators:', err.message);
        res.status(500).json({ message: err.message });
    }
}

const createCreator = async (req, res) => {
    const { name } = req.body;

    console.log('Received request to create creator:', name);

    try {
        const doesCreatorExist = await Creators.findOne({ name });
        if (doesCreatorExist) {
            console.log('Creator already exists:', name);
            return res.status(400).json({ message: 'Creator already exists' });
        }

        const creator = await Creators.create({ name });
        if (!creator) {
            console.log('Creator creation failed for:', name);
            return res.status(400).json({ message: 'Creator could not be created' });
        }

        console.log('Creator created successfully:', name);
        res.status(201).json({ message: 'Creator created successfully', data: creator });
    } catch (err) {
        console.error('Error creating creator:', err.message);
        res.status(500).json({ message: err.message });
    }
}


const deleteCreator = async (req, res) => {
    const { id } = req.body;
    try {
        const creator = await Creators.findByIdAndDelete(id);
        if (!creator) {
            return res.status(404).json({ message: 'Creator not found' });
        }
        res.status(200).json({ message: 'Creator deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getCreators,
    createCreator,
    deleteCreator
};

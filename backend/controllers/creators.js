const Creators = require('../models/Creators');

const getCreators = async (req, res) => {
    try {
        const Creators = await Creators.find();
        res.status(200).json({ message: 'Creators fetched successfully', data: Creators });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createCategory = async (req, res) => {
    const { name } = req.body;
    const catName = name.toLowerCase();
    try {
        const doesCategoryExist = await Creators.findOne({ name: catName });
        if (doesCategoryExist) {
            return res.status(400).json({ message: 'Category already exists' });
        }
        const category = await Creators.create({ name: catName });
        if (!category) {
            return res.status(400).json({ message: 'Category could not be created' });
        }
        res.status(201).json({ message: 'Category created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.body;
    try {
        const category = await Creators.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getCreators,
    createCategory,
    deleteCategory
};
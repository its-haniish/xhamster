const Categories = require('../models/Categories');

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json({ message: 'Categories fetched successfully', data: categories });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createCategory = async (req, res) => {
    const { name } = req.body;
    const catName = name.toLowerCase();
    try {
        const doesCategoryExist = await Categories.findOne({ name: catName });
        if (doesCategoryExist) {
            return res.status(400).json({ message: 'Category already exists' });
        }
        const category = await Categories.create({ name: catName });
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
        const category = await Categories.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getCategories,
    createCategory,
    deleteCategory
};
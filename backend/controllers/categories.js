const Categories = require('../models/Categories');

const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find().sort({ createdAt: -1 });
        res.status(200).json({ message: 'Categories fetched successfully', data: categories });
    } catch (err) {
        console.error('Error fetching categories:', err.message);
        res.status(500).json({ message: err.message });
    }
}



const createCategory = async (req, res) => {
    const { name } = req.body;

    console.log('Received request to create category:', name);

    try {
        const doesCategoryExist = await Categories.findOne({ name });
        if (doesCategoryExist) {
            console.log('Category already exists:', name);
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = await Categories.create({ name });
        if (!category) {
            console.log('Category creation failed for:', name);
            return res.status(400).json({ message: 'Category could not be created' });
        }

        console.log('Category created successfully:', name);
        res.status(201).json({ message: 'Category created successfully', data: category });
    } catch (err) {
        console.error('Error creating category:', err.message);
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
    deleteCategory,
};
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
    const catName = name.toLowerCase();

    console.log('Received request to create category:', name);

    try {
        const doesCategoryExist = await Categories.findOne({ name: catName });
        if (doesCategoryExist) {
            console.log('Category already exists:', catName);
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = await Categories.create({ name: catName });
        if (!category) {
            console.log('Category creation failed for:', catName);
            return res.status(400).json({ message: 'Category could not be created' });
        }

        console.log('Category created successfully:', catName);
        res.status(201).json({ message: 'Category created successfully', data: category });
    } catch (err) {
        console.error('Error creating category:', err.message);
        res.status(500).json({ message: err.message });
    }
}

const updateCategory = async (req, res) => {
    const { id, name } = req.body;
    const catName = name.toLowerCase();

    console.log('Received request to update category:', name);

    try {
        const doesCategoryExist = await Categories.findOne({ name: catName });
        if (doesCategoryExist) {
            console.log('Category already exists:', catName);
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = await Categories.findByIdAndUpdate(id, { name: catName }, { new: true });
        if (!category) {
            console.log('Category update failed for:', catName);
            return res.status(400).json({ message: 'Category could not be updated' });
        }

        console.log('Category updated successfully:', catName);
        res.status(201).json({ message: 'Category updated successfully', data: category });
    } catch (err) {
        console.error('Error updating category:', err.message);
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
    updateCategory
};
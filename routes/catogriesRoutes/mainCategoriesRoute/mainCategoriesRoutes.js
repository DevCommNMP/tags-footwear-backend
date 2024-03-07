const express = require('express');
const router = express.Router();
const { createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory} = require('../../../controller/categoriesController/mainCategories/mainCategories')

// Route to create a new category
router.post('/categories', createCategory);

// Route to get all categories
router.get('/categories', getAllCategories);

// Route to get a category by ID
router.get('/categories/:Id', getCategoryById);

// Route to update a category by ID
router.put('/categories/:Id', updateCategory);

// Route to delete a category by ID
router.delete('/categories/:Id', deleteCategory);

module.exports = router;

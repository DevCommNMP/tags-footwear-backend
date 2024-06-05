const express = require('express');
const router = express.Router();
const {  getAllSubCategories,
    getsubCategoryById,
    createsubCategory,
    updatesubCategory,
    deletesubCategory} = require('../../../controller/categoriesController/mainCategories/subCategoriesController')

// Route to create a new category
router.post('/subCategories', createsubCategory);

// Route to get all categories
router.get('/categories', getAllSubCategories);

// Route to get a category by ID
router.get('/subCategories/:Id', getsubCategoryById);

// Route to update a category by ID
router.put('/subCategories/:Id', updatesubCategory);

// Route to delete a category by ID
router.delete('/subCategories/:Id', deletesubCategory);

module.exports = router;
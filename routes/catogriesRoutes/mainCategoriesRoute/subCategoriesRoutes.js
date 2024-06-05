const express = require('express');
const router = express.Router();
const {  getAllSubCategories,
    getsubCategoryById,
    createsubCategory,
    updatesubCategory,
    deletesubCategory} = require('../../../controller/categoriesController/mainCategories/subCategoriesController')

// Route to create a new category


// Route to get all categories
router.get('/category/getsubCategories', getAllSubCategories);

// Route to get a category by ID
router.get('/subCategories/:Id', getsubCategoryById);
router.post('/subCategories', createsubCategory);
// Route to update a category by ID
router.put('/subCategories/:Id', updatesubCategory);

// Route to delete a category by ID
router.delete('/subCategories/:Id', deletesubCategory);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllSubCategoriesTypes,
    getsubCategoryTypesById,
    createsubCategoryTypes,
    updatesubCategoryType,
    deletesubCategoryType} = require('../../../controller/categoriesController/mainCategories/subCategoriesType')

// Route to create a new category
router.post('/subCategoriesType', createsubCategoryTypes);

// Route to get all categories
router.get('/subCategoriesType', getAllSubCategoriesTypes);

// Route to get a category by ID
router.get('/subCategoriesType/:Id', getsubCategoryTypesById);

// Route to update a category by ID
router.put('/subCategoriesType/:Id', updatesubCategoryType);

// Route to delete a category by ID
router.delete('/subCategoriesType/:Id', deletesubCategoryType);

module.exports = router;

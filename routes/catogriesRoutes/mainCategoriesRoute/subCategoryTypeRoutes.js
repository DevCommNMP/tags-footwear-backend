const express = require('express');
const router = express.Router();
const { getAllSubCategoriesTypes,
    getsubCategoryTypesById,
    createsubCategoryTypes,
    updatesubCategoryType,
    deletesubCategoryType} = require('../../../controller/categoriesController/mainCategories/subCategoriesType')

// Route to create a new category
router.get('/subCategoriesType', getAllSubCategoriesTypes);
router.post('/subCategoriesType', createsubCategoryTypes);

router.get('/subCategoriesType/:Id', getsubCategoryTypesById);
// Route to get a category by ID



// Route to get all categories


// Route to update a category by ID
router.put('/subCategoriesType/:Id', updatesubCategoryType);

// Route to delete a category by ID
router.delete('/subCategoriesType/:Id', deletesubCategoryType);

module.exports = router;

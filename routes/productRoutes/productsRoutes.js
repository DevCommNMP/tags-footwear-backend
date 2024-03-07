// productRoutes.js

const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById,
    createProduct,
    updateProduct,
    deleteProduct,} = require('../../controller/productsController/productController');


// Route to get all products
router.get('/products', getAllProducts);
// Route to create  prodduct 
router.post('/products', createProduct);

// Route to get a single product by ID
router.get('/products/:Id', getProductById);

//Route to update a particular product
router.put('/products/:Id', updateProduct);

//Route to delete a particular post by Id
router.delete('/products/:Id', deleteProduct);

// Other routes for creating, updating, and deleting products can be added here

module.exports = router;

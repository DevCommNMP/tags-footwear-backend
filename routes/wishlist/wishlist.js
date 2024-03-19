// productRoutes.js

const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById,
    createProduct,
    updateProduct,
    uploadProductImage,
    deleteProduct,uploadproductSubImages} = require('../../controller/productsController/productController');

    const productImageUpload=require('../../config/multerConfig/productImageUpload')
    const uploadSubImages=require('../../config/multerConfig/productSubimagesUplaod')

    const{ getWishlist}=require('../../controller/wishlistController/wishlistController')

// Route to get all products
router.get('/wishlist', getWishlist);
// Route to create  prodduct 
router.post('/products', createProduct);
//  upload product Image 
router.post('/products/:Id', productImageUpload.single("productImage"), uploadProductImage);

//  upload product Image 
router.post('/products/subImages/:Id', uploadSubImages.array("productSubImages"), uploadproductSubImages);

// Route to get a single product by ID
router.get('/products/:Id', getProductById);

//Route to update a particular product
router.put('/products/:Id', updateProduct);

//Route to delete a particular post by Id
router.delete('/products/:Id', deleteProduct);

// Other routes for creating, updating, and deleting products can be added here

module.exports = router;

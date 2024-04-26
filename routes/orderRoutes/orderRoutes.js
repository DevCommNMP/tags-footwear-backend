// productRoutes.js

const express = require('express');
const { getAllOrders,getOrderById,getOrderDetials,getOrderDetialsById, } = require('../../controller/orders/orderController');
const router = express.Router();

// Route to get all orders 

router.get('/orders',getAllOrders);


router.get('/orderDetails',getOrderDetials)

// // Route to get a single product by ID
router.get('/orders/:Id', getOrderById);


router.get('/orderDetails/:Id', getOrderDetialsById);

// Route to create  prodduct 
// router.post('/products', createProduct);
// //  upload product Image 
// router.post('/products/:Id', productImageUpload.single("productImage"), uploadProductImage);

// //  upload product Image 
// router.post('/products/subImages/:Id', uploadSubImages.array("productSubImages"), uploadproductSubImages);

// // Route to get a single product by ID
// router.get('/products/:Id', getProductById);

// //Route to update a particular product
// router.put('/products/:id', updateProduct);

// //Route to delete a particular post by Id
// router.delete('/products/:Id', deleteProduct);

// Other routes for creating, updating, and deleting products can be added here

module.exports = router;

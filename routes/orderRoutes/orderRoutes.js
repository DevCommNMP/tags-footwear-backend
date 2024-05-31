// productRoutes.js

const express = require('express');
const { getAllOrders,getOrderById,getOrderDetials,getOrderDetialsById,updateOrderStatus,trackOrder,orderCancellation } = require('../../controller/orders/orderController');
const router = express.Router();

// Route to get all orders 

router.get('/orders',getAllOrders);


router.get('/orderDetails',getOrderDetials)

// // Route to get a single product by ID
router.get('/orders/:Id', getOrderById);
router.get('/track-order/:Id', trackOrder);

router.get('/orderDetails/:Id', getOrderDetialsById);
router.post('/orderCancellation/:orderNumber', orderCancellation);
 //orderUpdation by tekipost delivery system
 router.post('/trackingStatusUpdate', updateOrderStatus);

module.exports = router;

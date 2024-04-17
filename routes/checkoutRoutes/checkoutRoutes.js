const express = require('express');
const { checkout,getKeys,pincodeData,paymentVerification } = require('../../controller/checkoutController/checkoutControllers');
const router = express.Router();

// Route to create a new review
router.get('/getkeys',getKeys)
router.post('/checkout',checkout)
router.post('/picodedata',pincodeData)
router.post('/payment-verification',paymentVerification)

// Other routes for updating and deleting reviews can be added here

module.exports = router;


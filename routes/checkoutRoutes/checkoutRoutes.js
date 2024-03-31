const express = require('express');
const { checkout } = require('../../controller/checkoutController/checkoutControllers');
const router = express.Router();

// Route to create a new review

router.post('/checkout',checkout)

// Other routes for updating and deleting reviews can be added here

module.exports = router;


const express = require('express');
const router = express.Router();
const { createReview,
    getReviewsByProduct} = require('../../controller/reviewController/reviewController');

// Route to create a new review
router.post('/reviews', createReview);

// Route to get all reviews for a product
router.get('/review/product/:Id', getReviewsByProduct);

// Other routes for updating and deleting reviews can be added here

module.exports = router;

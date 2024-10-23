const express = require('express');
const router = express.Router();
const { createReview,
    getReviewsByProduct,updateReviewController,getAllReviews,deleteReview,
    createLeatherProductReview,} = require('../../controller/reviewController/reviewController');

// Route to create a new review
router.post('/reviews/:productId', createReview);
// Route to get all reviews for a product
router.get('/reviews/product/:Id', getReviewsByProduct);
router.get('/reviews/', getAllReviews);
router.put('/reviews/:productId/reviews/:reviewId', updateReviewController);
router.delete('/reviews/:productId/reviews/:reviewId', deleteReview);

//Premium Leather Reviews Routes 
router.post('/reviews/LeatherProduct/:productId', createLeatherProductReview);
// Route to get all reviews for a product
router.get('/reviews/premiumLeather/product/:Id', getReviewsByProduct);
router.get('/reviews/premiumLeather/', getAllReviews);
router.put('/reviews/premiumLeather/:productId/reviews/:reviewId', updateReviewController);
router.delete('/reviews/premiumLeather/:productId/reviews/:reviewId', deleteReview);

// Other routes for updating and deleting reviews can be added here

module.exports = router;


const Review = require('../../modals/review/review');
const Product=require("../../modals/product/product")
const leatherProduct=require("../../modals/premiumLeather/premiumLeather")
// Controller function to create a new review
const createReview = async (req, res) => {
  const { productId } = req.params; // Extract productId from URL params
  const { userId, rating, comment } = req.body; // Extract review data from request body

  try {
    // Find the product by its productId
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Add the review to the product's reviews array
    product.reviews.push({ userId, rating, comment });

    // Calculate the new average rating for the product
    const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / product.reviews.length;

    // Update the product's overall rating
    product.rating = averageRating;

    // Save the updated product
    await product.save();

    // Respond with success message
    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get all reviews for a product
const getReviewsByProduct = async (req, res) => {
  const { Id } = req.params;
  try {
    const reviews = await Review.find({ product: Id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllReviews = async (req, res) => {
  const { Id } = req.params;
  try {
    const reviews = await Review.find({ });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReviewController = async (req, res) => {
  const { productId, reviewId } = req.params; // Extract productId and reviewId from request parameters
  const { rating, comment } = req.body; // Extract rating and comment from request body
console.log(productId,reviewId)
  try {
    // Find the product by its id
    const product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find the review by its id
    const reviewToUpdate = product.reviews.find(review => review._id.equals(reviewId));

    // Check if the review exists
    if (!reviewToUpdate) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Update the review properties
    reviewToUpdate.rating = rating;
    reviewToUpdate.comment = comment;

    // Save the updated product
    await product.save();

    res.status(200).json({ message: 'Review updated successfully', updatedReview: reviewToUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteReview = async (req, res) => {
  const { reviewId } = req.params; // Extract reviewId from URL params

  try {
    // Find the review by its reviewId and delete it
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    // Check if the review exists
    if (!deletedReview) {
      return res.status(404).json({ error: 'Review not found' });
    }

    // Respond with success message
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Import the LeatherProduct model

const createLeatherProductReview = async (req, res) => {
  const { productId } = req.params; // Extract productId from URL params
  const { userId, rating, comment } = req.body; // Extract review data from request body

  try {
    // Find the product by its productId
    const product = await leatherProduct.findById(productId);
console.log(product)
    // Check if the product exists
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Add the review to the product's reviews array
    product.reviews.push({ userId, rating, comment });

    // Calculate the new average rating for the product
    const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / product.reviews.length;

    // Update the product's overall rating
    product.rating = averageRating;

    // Save the updated product
    await product.save();

    // Respond with success message
    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports={
  createReview,
    getReviewsByProduct,
    updateReviewController,
    getAllReviews,
    deleteReview,
    createLeatherProductReview
}
// Other controller functions for updating and deleting reviews can be added here

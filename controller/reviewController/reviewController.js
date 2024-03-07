const Review = require('../../modals/review/review');

// Controller function to create a new review
const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

module.exports={
    createReview,
    getReviewsByProduct
}
// Other controller functions for updating and deleting reviews can be added here

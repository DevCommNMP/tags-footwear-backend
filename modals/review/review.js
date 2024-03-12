const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'onModel', // Reference to either 'Product' or 'LeatherProduct' model based on the 'onModel' field
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Product', 'LeatherProduct'] // Allowed values for the 'onModel' field
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

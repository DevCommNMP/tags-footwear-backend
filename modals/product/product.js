// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  description: String,
  price: Number,
  sizesAvailable: [String],
  colorsAvailable: [String],
  images: [String],
  stockQuantity: Number,
  rating: Number,
  reviews: [{
    userId: String,
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);

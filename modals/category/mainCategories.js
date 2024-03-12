const mongoose = require('mongoose');

// Subcategory schema
const subcategorySchema = new mongoose.Schema({
  name: {
    
    type: String,
    required: true
  },
  description: String
});

// Brand schema
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

// Color schema
const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// ShoeType schema
const shoeTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

// Occasion schema
const occasionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String
});

// Category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  subcategories: [subcategorySchema], // Array of subcategories
  brands: [brandSchema], // Array of brands
  colors: [colorSchema], // Array of colors
  shoeTypes: [shoeTypeSchema], // Array of shoe types
  occasions: [occasionSchema] // Array of occasions
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

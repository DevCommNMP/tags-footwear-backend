const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  productImage:{
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  occasion: {
    type: String,
    required: true
  },
  countryOfOrigin: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tag:{
    type:String,
    required:true
      },


  sizesAvailable: [String],
  colorsAvailable: [String],
  productSubImages: [String],
  stockQuantity: {
    type: Number,
    required: true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true,
  },  
  subcategory:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"subCategory",
    required:true,
  },
  subcategoryType:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"subCategoryType",
    required:true,
  },
  rating: Number,
  reviews: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);

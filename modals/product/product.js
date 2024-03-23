const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  
  sizesAvailable: [{
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
  }],

  colorsAvailable: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    // required: true
  },

  occasion: {
    type: String,
    required: true,
  },
  countryOfOrigin: {
    type: String,
    required: true,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  SellingPrice: {
    type: Number,
    required: true,
  },
  productSubImages: [String],

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Make sure to use the correct model name
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategory", // Make sure to use the correct model name
    required: true,
  },
  subcategoryType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategoryType", // Make sure to use the correct model name
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },

  rating: Number,
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
},{ strictPopulate: false });

module.exports = mongoose.model("Product", productSchema);

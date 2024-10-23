const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slugTitle:{
    type: String,
    required: true,
    unique:true,
  },
  productImage: {
    type: String,
    default:"https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",
    // required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    default:"Tags",
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
      required:true
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


  countryOfOrigin: {
    type: String,
    // required: true,
  },
 
  
  SellingPrice: {
    type: Number,
    required: true,
  },
  
  promotionalPrice: {
    type: Number,
    // required: true,
  },
  productSubImages: [String],
  // default:"https://drive.google.com/file/d/1LSbvJ5NetEo-0b86Eo3Q8LeFIRHOAsSY/view?usp=sharing",

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Make sure to use the correct model name
    // required: true,
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
 
  isPremiumLeather:{
type:Boolean,
default:false
  },
  tag: {
    type: String,
    // required: true,
  },
  discount:{
    type:String,
  },
  rating: Number,

  createdAt: { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now },
},{ strictPopulate: false });

module.exports = mongoose.model("Product", productSchema);

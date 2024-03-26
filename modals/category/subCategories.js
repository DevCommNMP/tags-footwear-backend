const mongoose = require('mongoose');

const subcategoriesSchema = new mongoose.Schema({
  subcategoriesName: {
    type: String,
    required: true,
    unique:true,

   
  },
  Image: String,
  color: String
});

const subCategory = mongoose.model('subCategory', subcategoriesSchema);

module.exports = subCategory;

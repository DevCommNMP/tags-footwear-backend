const mongoose = require('mongoose');

const subcategoryTypeSchema = new mongoose.Schema({
  subcategoryTypeName: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: String
});

const subCategoryType = mongoose.model('subCategoryType', subcategoryTypeSchema);

module.exports = subCategoryType;

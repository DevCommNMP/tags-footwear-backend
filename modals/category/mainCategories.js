const mongoose = require('mongoose');

const mainCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
});

const MainCategory = mongoose.model('MainCategory', mainCategorySchema);

module.exports = MainCategory;
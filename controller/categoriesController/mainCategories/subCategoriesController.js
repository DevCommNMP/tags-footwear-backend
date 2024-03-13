const subCategory = require("../../../modals/category/subCategories");



// Controller function to get all categories
const getAllSubCategories = async (req, res) => {
  try {
    const categories = await subCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error getting categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get a single subCategory by ID
const getsubCategoryById = async (req, res) => {
  console.log(req.params.Id);
  try {
    const subCategory = await subCategory.findById(req.params.Id);
    if (!subCategory) {
      return res.status(404).json({ error: 'subCategory not found' });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    console.error('Error getting subCategory by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create a new subCategory
const createsubCategory = async (req, res) => {
  try {
    const { subcategoriesName, icon, color } = req.body;
    const newsubCategory = new subCategory({ subcategoriesName, icon, color });
    const savedsubCategory = await newsubCategory.save();
    res.status(201).json(savedsubCategory);
  } catch (error) {
    console.error('Error creating subCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update a subCategory by ID
const updatesubCategory = async (req, res) => {
  try {
    const updatedsubCategory = await subCategory.findByIdAndUpdate(
      req.params.Id,
      req.body,
      { new: true }
    );
    if (!updatedsubCategory) {
      return res.status(404).json({ error: 'subCategory not found' });
    }
    res.status(200).json(updatedsubCategory);
  } catch (error) {
    console.error('Error updating subCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a subCategory by ID
const deletesubCategory = async (req, res) => {
  try {
    const deletedsubCategory = await subCategory.findByIdAndDelete(req.params.Id);
    if (!deletedsubCategory) {
      return res.status(404).json({ error: 'subCategory not found' });
    }
    res.status(200).json({ message: 'subCategory deleted successfully' });
  } catch (error) {
    console.error('Error deleting subCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllSubCategories,
  getsubCategoryById,
  createsubCategory,
  updatesubCategory,
  deletesubCategory
};

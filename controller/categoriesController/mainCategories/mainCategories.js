const mainCategories = require('../../../modals/category/mainCategories');

const createCategory = async (req, res) => {
  try {
    const category = await mainCategories.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all categories
 const getAllCategories = async (req, res) => {
  try {
    const categories = await mainCategories.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a category by ID
const getCategoryById = async (req, res) => {
  const { Id } = req.params;
  try {
    const category = await mainCategories.findById(Id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a category by ID
const updateCategory= async (req, res) => {
  const { Id } = req.params;
  try {
    const updatedCategory = await mainCategories.findByIdAndUpdate(Id, req.body, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a category by ID
const deleteCategory = async (req, res) => {
  const { Id } = req.params;
  try {
    const deletedCategory = await mainCategories.findByIdAndDelete(Id);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}
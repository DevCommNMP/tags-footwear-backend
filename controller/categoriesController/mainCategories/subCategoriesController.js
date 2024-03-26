const SubCategories = require('../../../modals/category/subCategories'); // Adjust the path as needed
  



// Controller function to get all categories
const getAllSubCategories = async (req, res) => {
  console.log("updating the data")
  try {
    const categories = await SubCategories.find();
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
    const subcategory = await SubCategories.findById(req.params.Id);
  
    if (!subcategory) {
      return res.status(404).json({ error: 'subCategory not found' });
    }
    res.status(200).json(subcategory);
  } catch (error) {
    console.error('Error getting subCategory by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create a new subCategory
const createsubCategory = async (req, res) => {
  try {
    const { subcategoriesName, icon, color } = req.body;
    const hasSubCategory=await SubCategories.findOne({subcategoriesName});
    if(hasSubCategory){
      res.status(201).json({message:"SubCategory Should be unique"})
      // return;                 
    }
    const newsubCategory = new SubCategories({ subcategoriesName, icon, color });
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
    const updatedsubCategory = await SubCategories.findByIdAndUpdate(
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
    const deletedsubCategory = await SubCategories.findByIdAndDelete(req.params.Id);
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

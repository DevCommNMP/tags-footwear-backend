const subCategoryType = require("../../../modals/category/subCategorytype");



// Controller function to get all categories
const getAllSubCategoriesTypes = async (req, res) => {
  try {
    const categories = await subCategoryType.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error getting categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to get a single subCategory by ID
const getsubCategoryTypesById = async (req, res) => {
  console.log(req.params.Id);
  try {
    const subcategory = await subCategoryType.findById(req.params.Id);
  
    if (!subcategory) {
      return res.status(404).json({ error: 'Sub-Type not found' });
    }
    res.status(200).json(subcategory);
  } catch (error) {
    console.error('Error getting sub-type by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create a new subCategory
const createsubCategoryTypes = async (req, res) => {
  try {
    const { subcategoryTypeName, icon, color } = req.body;
    const hasSubCategory=await subCategoryType.findOne({subcategoryTypeName});
    if(hasSubCategory){
      res.status(201).json({message:"Sub-type Should be unique"})
      // return;                 
    }
    const newsubCategory = new subCategoryType({ subcategoryTypeName, icon, color });
    const savedsubCategory = await newsubCategory.save();
    res.status(201).json(savedsubCategory);
  } catch (error) {
    console.error('Error creating sub-type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update a subCategory by ID
const updatesubCategoryType = async (req, res) => {
  try {
    const updatedsubCategory = await subCategoryType.findByIdAndUpdate(
      req.params.Id,
      req.body,
      { new: true }
    );
    if (!updatedsubCategory) {
      return res.status(404).json({ error: 'Sub category not found' });
    }
    res.status(200).json(updatedsubCategory);
  } catch (error) {
    console.error('Error updating sub-type:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a subCategory by ID
const deletesubCategoryType = async (req, res) => {
  try {
    const deletedsubCategory = await subCategoryType.findByIdAndDelete(req.params.Id);
    if (!deletedsubCategory) {
      return res.status(404).json({ error: 'Sub-type not found' });
    }
    res.status(200).json({ message: 'Sub-type deleted successfully' });
  } catch (error) {
    console.error('Error deleting subCategory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
    getAllSubCategoriesTypes,
  getsubCategoryTypesById,
  createsubCategoryTypes,
  updatesubCategoryType,
  deletesubCategoryType
};

const subCategoriesTypes=require('../../../modals/category/subCategorytype')
const categories=require('../../../modals/category/subCategories');
const Product = require('../../../modals/product/product');


// Controller function to get all categories


const getSubCategoriesTypes=async(req,res)=>{
  try {
    const products = await subCategoriesTypes.find({})
    res.json(products);
} catch (error) {
    // Handle error, log, etc.
    console.error('Error finding subCategoryTypes:', error);
    throw error;
}
}




// Controller function to get a single subCategory by ID
const getsubCategoryTypesById = async (req, res) => {
  console.log(req.params.Id);
  try {
    const subcategoryType = await subCategoriesTypes.findById(req.params.Id);
  
    if (!subcategoryType) {
      return res.status(404).json({ error: 'Sub-Type not found' });
    }
    res.status(200).json(subcategoryType);
  } catch (error) {
    console.error('Error getting sub-type by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to create a new subCategory
const createsubCategoryTypes = async (req, res) => {
  try {
    const { subcategoryTypeName, icon, color } = req.body;
    const hasSubCategory=await subCategoriesTypes.findOne({subcategoryTypeName});
    if(hasSubCategory){
      res.status(201).json({message:"Sub-type Should be unique"})
      return;                 
    }
    const newsubCategory = new subCategoriesTypes({ subcategoryTypeName, icon, color });
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
    const updatedsubCategory = await subCategoriesTypes.findByIdAndUpdate(
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
    const deletedsubCategory = await subCategoriesTypes.findByIdAndDelete(req.params.Id);
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
  getSubCategoriesTypes,
  getsubCategoryTypesById,
  createsubCategoryTypes,
  updatesubCategoryType,
  deletesubCategoryType
};

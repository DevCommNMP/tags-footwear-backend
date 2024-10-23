// controllers/PremiumLeatherController.js
const PremiumLeather = require('../../modals/premiumLeather/premiumLeather');
const Product = require('../../modals/product/product');

// GET all premium leather shoes
const getAllPremiumLeathers = async (req, res) => {
  try {
    const shoes = await PremiumLeather.find();
    res.json(shoes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single premium leather shoe by ID
const getPremiumLeatherById = async (req, res) => {
  try {
    const product = await PremiumLeather.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Premium leather shoe not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};// Create a new premium leather shoe
const createPremiumLeather = async (req, res) => {
  console.log(req)
  const premiumProduct = new PremiumLeather(req.body)
   const newProduct=new Product(req.body)
  try {

    
      await premiumProduct.save();  
      await newProduct.save();
      res.status(201).json(premiumProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

};

// Update a premium leather shoe
const updatePremiumLeatherById = async (req, res) => {
  try {
   

    const updatedShoe = await PremiumLeather.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedShoe) {
      return res.status(404).json({ message: 'Premium leather shoe not found' });
    }

    res.json(updatedShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a premium leather shoe
const deletePremiumLeatherById = async (req, res) => {
  try {
    const deletedShoe = await PremiumLeather.findByIdAndDelete(req.params.id);
    if (!deletedShoe) {
      return res.status(404).json({ message: 'Premium leather shoe not found' });
    }
    res.json({ message: 'Premium leather shoe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPremiumLeathers,
  deletePremiumLeatherById,
  updatePremiumLeatherById,
  createPremiumLeather,
  getPremiumLeatherById
};

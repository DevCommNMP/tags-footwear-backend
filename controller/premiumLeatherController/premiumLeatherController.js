// controllers/PremiumLeatherController.js
const PremiumLeather = require('../../modals/premiumLeather/premiumLeather');

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
  console.log(req.body)
  const shoe = new PremiumLeather({
    productName: req.body.name,
    brand: req.body.brand,
    category: req.body.category,
    description: req.body.description,
    gender: req.body.gender,
    product: req.body.product,
    occasion: req.body.occasion,
    countryOfOrigin: req.body.countryOfOrigin,
    price: req.body.price,
    sizesAvailable: req.body.sizesAvailable,
    colorsAvailable: req.body.colorsAvailable,
    images: req.body.images,
    stockQuantity: req.body.stockQuantity,
    rating: req.body.rating,
    reviews: req.body.reviews,
    createdAt: req.body.createdAt,
    modifiedAt: req.body.modifiedAt
  });

  try {
    const newShoe = await shoe.save();
    res.status(201).json(newShoe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a premium leather shoe
const updatePremiumLeather = async (req, res) => {
  try {
    const allowedUpdates = ['name', 'description', 'price', 'colorsAvailable', 'brand', 'sizesAvailable'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

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
const deletePremiumLeather = async (req, res) => {
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
  deletePremiumLeather,
  updatePremiumLeather,
  createPremiumLeather,
  getPremiumLeatherById
};

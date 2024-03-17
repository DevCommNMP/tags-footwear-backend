// routes/premiumLeatherShoe.js
const express = require('express');
const multer=require('multer')
const router = express.Router();
const upload = multer();
const {  getAllPremiumLeathers,
    deletePremiumLeather,
    updatePremiumLeather,
    createPremiumLeather,
    getPremiumLeatherById} = require('../../controller/premiumLeatherController/premiumLeatherController');

// GET all premium leather shoes
router.get('/premiumLeather',getAllPremiumLeathers);

// GET a single premium leather shoe
// router.get('/premiumLeather/:id',getPremiumLeatherShoeById);

// // Create a new premium leather shoe
router.post('/premiumLeather/', createPremiumLeather);

// // Update a premium leather shoe
// router.put('/premiumLeather/:id',updatePremiumLeatherShoe);

// // Delete a premium leather shoe
// router.delete('/premiumLeather/:id',deletePremiumLeatherShoe);

module.exports = router;

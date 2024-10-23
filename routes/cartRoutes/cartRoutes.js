const express = require('express');
const router = express.Router();
const {    createCart,
    getAllCarts,
    updateCartById,
    deleteCartById,
    getCartById} = require("../../controller/cartController/cartController");
const { isAuthenticated } = require('../../controller/authController/authController');

// Create a new cart
router.post('/cart', createCart);

// Get all carts
router.get('/cart', getAllCarts);

// Get cart by ID
router.get('/cart/:id', getCartById);

// Update cart by ID
router.put('/cart/:id', updateCartById);

// Delete cart by ID
router.delete('/cart/:id', deleteCartById);

module.exports = router;

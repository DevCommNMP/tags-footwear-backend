const express = require('express');
const router = express.Router();
const {    createCart,
    getAllCarts,
    updateCartById,
    deleteCartById,
    getCartById} = require("../../controller/cartController/cartController")

// Create a new cart
router.post('/', createCart);

// Get all carts
router.get('/', getAllCarts);

// Get cart by ID
router.get('/:id', getCartById);

// Update cart by ID
router.put('/:id', updateCartById);

// Delete cart by ID
router.delete('/:id', deleteCartById);

module.exports = router;

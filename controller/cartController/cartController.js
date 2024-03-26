const Cart = require('../../modals/cart/cart');
const User = require('../../modals/user/User');

// Create a new cart
const   createCart = async (req, res) => {

  // try {
  //   const user=await User.findById()
  //   const { userId, productId } = req.body;
  //   const cart = await Cart.create({ userId, productId });
  //   res.status(201).json(cart);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

// Get all carts
const  getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('products');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get cart by ID
const   getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update cart by ID
const updateCartById = async (req, res) => {
  try {
    const { userId, products } = req.body;
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { userId, products }, { new: true });
    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete cart by ID
const deleteCartById = async (req, res) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);
    if (!deletedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports={
    createCart,
    getAllCarts,
    updateCartById,
    deleteCartById,
    getCartById
}
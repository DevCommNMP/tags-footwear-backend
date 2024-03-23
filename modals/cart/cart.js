const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  products: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product' // Reference to the Product model
        },
    quantity: {
      type: Number,
      default: 1
    }
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

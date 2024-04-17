const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderDetails:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderDetail',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderId:{
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Shipped'  , 'Delivered'],
    default: 'Pending'
  },
 
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

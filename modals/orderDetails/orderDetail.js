// orderDetail.js

const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  ptoductDetails: [
   { 
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
  },
  quantity: {
      type: Number,
      required: true
  },
  price:{
    type: Number,
      required: true
  },
  totalAmount:{

  }
  },
    
],
  quantity: {
    type: Number,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  }
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;

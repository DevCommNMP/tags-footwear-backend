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

  },
    
],
billingDetails: {
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  billing_address: {
    type: String,
    required: true
  },
  billing_address2: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  additionalInfo: {
    type: String
  }
},
  
  subtotal: {
    type: Number,
    required: true
  }
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;

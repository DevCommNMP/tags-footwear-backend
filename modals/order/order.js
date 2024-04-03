const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered'],
    default: 'Pending'
  },
  // billingDetails: {
  //   fname: {
  //     type: String,
  //     required: true
  //   },
  //   lname: {
  //     type: String,
  //     required: true
  //   },
  //   billing_address: {
  //     type: String,
  //     required: true
  //   },
  //   billing_address2: {
  //     type: String
  //   },
  //   city: {
  //     type: String,
  //     required: true
  //   },
  //   zipcode: {
  //     type: String,
  //     required: true
  //   },
  //   phone: {
  //     type: String,
  //     required: true
  //   },
  //   state: {
  //     type: String,
  //     required: true
  //   },
  //   email: {
  //     type: String,
  //     required: true
  //   },
  //   additionalInfo: {
  //     type: String
  //   }
  // }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

  const mongoose = require('mongoose');

  const orderSchema = new mongoose.Schema({
    orderDetails: {
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
    orderId: {
      type: String,
      required: true
    },
    orderStatus: {
      type: String,
      enum: ['processing', 'Shipped', 'Delivered'],
      default: 'processing'
    },
    PaymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending'
    },
    paymentDetails: [{
      razorpay_order_id: {
        type: String,
        required: true,
      },
      razorpay_payment_id: {
        type: String,
        required: true,
      },
      razorpay_signature: {
        type: String,
        required: true,
      },
    }]
  });

  const Order = mongoose.model('Order', orderSchema);

  module.exports = Order;

const mongoose = require('mongoose');

// Define schema
const paymentSchema = new mongoose.Schema({
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
});

// Define model
const Payment = mongoose.model("Payment", paymentSchema);

// Export model
module.exports = Payment;

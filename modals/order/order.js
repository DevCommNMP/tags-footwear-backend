const mongoose = require('mongoose');

// Schema for order counter
const orderCounterSchema = new mongoose.Schema({
  prefix: {
    type: String,
    required: true,
    unique: true
  },
  sequence_value: {
    type: Number,
    default: 0
  }
});

const OrderCounter = mongoose.model('OrderCounter', orderCounterSchema);

// Function to get the next sequence value for a given prefix
async function getNextSequenceValue(prefix) {
  const result = await OrderCounter.findOneAndUpdate(
    { prefix },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true }
  );
  return result.sequence_value;
}

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
  merchant_id :{
    type:Number,
    // require:true,
  },
  awb_no  :{
    type:String,
    // require:true,
  },
  pickup_pincode :{
    type:Number,
    // require:true,
  },
  destination_pincode:{
    type:Number,
  },
  aggregator_shipment_id :{
    type:String,
  },
  paymentMethod:{
type:String,
  },
  courier_id:{
    type:Number,
  },
  status_id:{
    type:Number,
  },
  courier_msg:{
    type:String,
  },
  courier_event_date_time:{
    type:Date,
  },
  current_location:{
    type:String,
  },

  // order id generationg for tags footwear
  orderId:{
type:String,
require:true,
  },
  //order_id from tekipost api which is used to track orders
  order_id:{
    type:Number,
    require:true,
      },
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderNumber: {
    type: String,
   
    unique: true
  },
 invoice_no:{
  type: String,
 },
  orderStatus: {
    type: String,
    enum: ['processing', 'Shipped', 'Delivered','Cancelled'],
    default: 'processing'
  },
  PaymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed','COD'],
    default: 'Pending'
  },
  razorpay_order_id:{
    type: String,
    // required: true,
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

// Pre-save hook to generate order number
orderSchema.pre('save', async function(next) {
  try {
    const prefix = 'TF'; // Prefix for the order number
    const sequenceValue = await getNextSequenceValue(prefix);
    this.orderNumber = `${prefix}${sequenceValue.toString().padStart(3, '0')}`; // Format the sequence value
    next(); // Proceed to save the document
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

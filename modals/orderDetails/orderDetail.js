// orderDetail.js

const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  orderId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Order',
    type:String,
    required: true
  },
  productDetails: [
   { 
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
  },
  orderNumber:{
    type:String,
    unique:true,
  },
  quantity: {
      type: Number,
      required: true
  },
  price:{
    type: Number,
      required: true
  },

  size:{
    type:"string"
  },

  color:{
    type:"string"
  }
  },
    
],
paymentId:{
  type:String,

},
paymentSignature:{
  type:String,
},
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
  },
  CGST:{
    type: Number,
  },
  SGST:{
    type: Number,
  },
  totalTax:{
    type: Number,
  },
  Date:{
    type:Date,
    default: Date.now
  }
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;

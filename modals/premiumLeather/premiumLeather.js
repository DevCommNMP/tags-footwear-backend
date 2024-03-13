const mongoose=require('mongoose')
const premiumLeatherShoeSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    product: {
      type: String,
      required: true
    },
    occasion: {
      type: String,
      required: true
    },
    countryOfOrigin: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    sizesAvailable: [String],
    colorsAvailable: [String],
    images: [String],
    stockQuantity: {
      type: Number,
      required: true
    },
    rating: Number,
    reviews: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: String,
      createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('LeatherProduct', premiumLeatherShoeSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    // Assuming you have an image URL for the product
    image: {
        type: String,
        required: true
    },
    // Assuming you have a rating system for products
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    // Assuming you want to keep track of the number of times the product has been viewed
    views: {
        type: Number,
        default: 0
    },
    // Assuming you want to keep track of the number of times the product has been purchased
    purchases: {
        type: Number,
        default: 0
    },
    // Assuming you want to keep track of the date the product was added to the database
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

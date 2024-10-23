const mongoose = require('mongoose');

const orderCounterSchema = new mongoose.Schema({
    prefix: String,
    sequence_value: { type: Number, default: 0 }
});

const OrderCounter = mongoose.model('OrderCounter', orderCounterSchema);

module.exports = OrderCounter;
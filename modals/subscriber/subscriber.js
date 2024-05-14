const mongoose = require('mongoose');

const subsribeSchema = new mongoose.Schema({
 email:{
    type:String,
    unique:true,
    required:true,
 }
});

const Subscriber = mongoose.model('Subscriber', subsribeSchema);

module.exports = Subscriber;

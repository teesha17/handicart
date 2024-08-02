const mongoose =require('mongoose');

const {Schema}= mongoose;

const cartSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique:true,
    },
    order_data:{
        type: Array,
        required:true
    }
});

module.exports = mongoose.model('cart',cartSchema);
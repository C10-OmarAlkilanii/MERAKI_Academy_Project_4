const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    img:{type:String ,required:true},
    title: {type:String,required:true},
    price: {type:Number},
})

module.exports = mongoose.model("Products",cartSchema)
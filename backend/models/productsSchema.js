const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img:{type:String ,required:true},
    title: {type:String,required:true},
    description: {type:String},
})

module.exports = mongoose.model("Products",productSchema)
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img:{type:String ,required:true},
    title: {type:String,required:true},
    titleCategory: {type:String,required:true},
})

module.exports = mongoose.model("Products",productSchema);
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: "Users"},
    products:[],
})

module.exports = mongoose.model("Cart",cartSchema);
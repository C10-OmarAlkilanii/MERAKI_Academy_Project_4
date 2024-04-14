const express = require("express");
const { addProductToCart } = require("../controllers/cartController");
//get functions from controller

//Define Router 
const cartRouter = express.Router();
const authentication = require("../middleware/authintication")

//Define the function and paths
cartRouter.put("/addNewProductToCart/:user",authentication,addProductToCart);


module.exports = cartRouter;
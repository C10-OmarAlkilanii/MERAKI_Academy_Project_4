const express = require("express");
const { addNewCart, getAllCartProducts } = require("../controllers/cartController");
//get functions from controller

//Define Router 
const cartRouter = express.Router();

//Define the function and paths
cartRouter.post("/addNewProductToCart",addNewCart);
cartRouter.get("/",getAllCartProducts);

module.exports = cartRouter;
const express = require("express");
const { addNewCart, getAllCartProducts,getProductByAuthor} = require("../controllers/cartController");
//get functions from controller

//Define Router 
const cartRouter = express.Router();

//Define the function and paths
cartRouter.post("/addNewProductToCart",addNewCart);
cartRouter.get("/",getAllCartProducts);
cartRouter.get("/search/:id",getProductByAuthor);

module.exports = cartRouter;
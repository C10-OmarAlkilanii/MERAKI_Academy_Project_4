const express = require("express");
//get functions from controller
const { addNewProduct } = require("../controllers/productsController");


//Define Router 
const productsRouter = express.Router();

//Define the function and paths
productsRouter.post("/addNewProduct",addNewProduct);


module.exports = productsRouter;
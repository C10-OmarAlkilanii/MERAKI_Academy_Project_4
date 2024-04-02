const express = require("express");
const { addNewCategory, getAllCategory } = require("../controllers/categoryController");
//get functions from controller


//Define Router 
const categoryRouter = express.Router();

//Define the function and paths
categoryRouter.post("/addNewCategory",addNewCategory);
categoryRouter.get("/",getAllCategory);

module.exports = categoryRouter;
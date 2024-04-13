const express = require("express");
const { addNewCategory, getAllCategory } = require("../controllers/categoryController");
//get functions from controller

// Middleware
const authentication = require("../middleware/authintication");
const authorization = require("../middleware/authorization");

//Define Router 
const categoryRouter = express.Router();

//Define the function and paths
categoryRouter.post("/addNewCategory",addNewCategory);
categoryRouter.get("/",authentication,getAllCategory);

module.exports = categoryRouter;
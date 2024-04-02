const express = require("express");
//get functions from controller
const {createNewRole} = require("../controllers/roleController")
//Define Router 
const roleRouter = express.Router();

//Define the function and paths
roleRouter.post("/", createNewRole);


module.exports = roleRouter;
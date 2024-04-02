const express = require("express");
//get functions from controller
const {register,login} = require("../controllers/usersController");
//Define Router 
const usersRouter = express.Router();

//Define the function and paths
usersRouter.post("/login", login);
usersRouter.post("/register", register);


module.exports = usersRouter;
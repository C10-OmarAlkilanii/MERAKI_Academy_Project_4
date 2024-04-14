const usersModel = require("../models/usersSchema");
const cartModel = require("../models/cartSchema")
//for user login 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// This function creates a new author (new user)
const register = (req, res) => {
  const { userName,firstName,lastName,email,password, role } = req.body;

  const user = new usersModel({
    userName,
    firstName,
    lastName,
    email,
    password,
    role:"6609db8cf1587c74a17f2837",
  });

  user
    .save()
    .then((result) => {

      //get User id to add products to the carts
      const cartUser = new cartModel({
        userId:result.id,
      })

      cartUser.save().then((resp)=>{
        res.status(201).json({
          success: true,
          message: `Account Created Successfully`,
          user: result,
          cartUser: resp,
        });
      })
  
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      console.log(err)
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

// This function checks user login credentials
const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  usersModel
    .findOne({ email })
    .populate("role", "-_id -__v")
    .then(async (result) => {
      if (!result){
        return res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        }
        const payload = {
          userId: result._id,
          author: result.firstName,
          role: result.role,
          country: result.country,
        };

        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SECRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

//Get user bi ID
/* const getUserByID = (req,res)=>{
  const {id} = req.params;
  usersModel.findById(id,"-__v").populate("role","-__v -__id").then((result)=>{
    console.log("user ID",result);
    if(!result){
      res.status(404).json({
        success:false,
        message:"User not found",
      })
    }else{
      res.status(200).json({
        success:true,
        message: `user id is :${id}`,
        user: result,
      })
    }
  })
} */

module.exports = {
  register,
  login,
};

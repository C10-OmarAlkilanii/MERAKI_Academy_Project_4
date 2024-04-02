const cartModel = require("../models/cartSchema")

//Define functions for Carts
// ******************
//Add new produc
const addNewCart = (req,res)=>{
    const { img ,title,price} = req.body;
    const author = req.token.userId;
    const newCart = new cartModel({
        img,
        title,
        price,
        author,
    });
  
    newCart
      .save()
      .then((cart) => {
        res.status(201).json({
          success: true,
          message: `Product added to Cart`,
          cart: cart,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err.message,
        });
      });

}

//get All Products
const getAllCartProducts = (req,res)=>{

    const userId = req.token.userId;
  cartModel
    .find()
    .exec()
    .then((cart) => {
      if (cart.length) {
        res.status(200).json({
          success: true,
          message: `All the products inside the Cart`,
          userId: userId,
          cart : cart,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No Cart products Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    }); 
}


module.exports = {addNewCart,getAllCartProducts};
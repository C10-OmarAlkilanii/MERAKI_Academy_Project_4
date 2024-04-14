const cartModel = require("../models/cartSchema")

//Define functions for Carts
// ******************

const addProductToCart = (req,res)=>{
  const user = req.params;
  const userId = req.token.userId;
  const newProduct = req.body;
  cartModel.findOneAndUpdate(
    {user},
    {$push:{products:newProduct},userId},
    {new:true}
  ).then((result)=>{
        res.status(201).json({
        success: true,
        message: "product added succesfully",
        product:result})
    
  }).catch(err=>{
    res.status(500).json({
    success:false,
    message:err.message
  })
})

}

module.exports = {addProductToCart};
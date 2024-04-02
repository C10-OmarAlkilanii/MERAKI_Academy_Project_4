const productsModel = require("../models/productsSchema")

//Define functions for products
// ******************
//create new products
const addNewProduct = (req,res)=>{
    const { img ,title, description } = req.body;
    const author = req.token.userId;
    const newProduct = new productsModel({
        img,
        title,
        description,
        author,
    });
  
    newProduct
      .save()
      .then((product) => {
        res.status(201).json({
          success: true,
          message: `Product created`,
          product: product,
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

//get All products
const getAllProducts = (req,res)=>{

    const userId = req.token.userId;
  productsModel
    .find()
    .exec()
    .then((products) => {
      if (products.length) {
        res.status(200).json({
          success: true,
          message: `All the products`,
          userId: userId,
          products: products,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No products Yet`,
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


module.exports = {addNewProduct,getAllProducts};
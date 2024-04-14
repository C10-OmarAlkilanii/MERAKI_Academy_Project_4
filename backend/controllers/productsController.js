const productsModel = require("../models/productsSchema")

//Define functions for products
// ******************
//create new products
const addNewProduct = (req, res) => {
  const { img, title,titleCategory } = req.body;
  
  const newProduct = new productsModel({
    img,
    title,
    titleCategory,
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
};

//get products by category




module.exports = {addNewProduct};
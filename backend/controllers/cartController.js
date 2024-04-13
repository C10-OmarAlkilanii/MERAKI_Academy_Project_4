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


//This function returns products by author
const getProductByAuthor = (req, res) => {
  let authorId = req.query.author;

  cartModel
    .findMany({ author: authorId })
    .then((products) => {
      if (!products.length) {
        return res.status(404).json({
          success: false,
          message: `The author: ${authorId} has no products`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the products for the author: ${authorId}`,
        products: products,
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

/* const getArticlesByAuthor = (req, res) => {
  let authorId = req.query.author;

  articlesModel
    .findMany({ author: authorId })
    .then((articles) => {
      if (!articles.length) {
        return res.status(404).json({
          success: false,
          message: `The author: ${authorId} has no articles`,
        });
      }
      res.status(200).json({
        success: true,
        message: `All the articles for the author: ${authorId}`,
        articles: articles,
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
  */

module.exports = {addNewCart,getAllCartProducts,getProductByAuthor};
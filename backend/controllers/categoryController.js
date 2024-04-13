const categoryModel = require("../models/categorySchema")

//Define functions for Category
// ******************
//create new Category
const addNewCategory = (req,res)=>{
    const { img ,title} = req.body;
    const newCategory = new categoryModel({
        img,
        title,
        
    });
  
    newCategory
      .save()
      .then((category) => {
        res.status(201).json({
          success: true,
          message: `Category created`,
          category: category,
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


//get All Categories
const getAllCategory = (req,res)=>{

    const userId = req.token.userId;
    
  categoryModel
    .find()
    .exec()
    .then((category) => {
      if (category.length) {
        res.status(200).json({
          success: true,
          message: `All the categories`,
          userId: userId,
          category: category,
        });
      } else {
        res.status(200).json({
          success: false,
          message: `No categories Yet`,
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


module.exports = {addNewCategory,getAllCategory};
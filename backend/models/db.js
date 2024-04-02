const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

mongoose.connect(`${DB_URI}`).then((result)=>{
    console.log("DB is Ready to use");
}).catch((err)=>{
    console.log(err.message);
})

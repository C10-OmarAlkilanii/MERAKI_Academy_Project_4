const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
    {
        userName: {type:String},
        firstName: {type:String},
        lastName: {type:String},
        email: {type:String , required:true},
        password : {type:String ,required:true},
        role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
    }
);

//
userSchema.pre("save", async function () {
    console.log(this.password)
    this.email = this.email.toLowerCase();
    this.password = await bcrypt.hash(this.password, 10);
});

  module.exports = mongoose.model("Users",userSchema);

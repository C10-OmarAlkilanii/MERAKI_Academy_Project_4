const express = require("express");
const cors = require("cors");
require("dotenv").config();

//import Mongoose
const db = require("./models/db")

const app = express();
const PORT =  5000;

app.use(cors());
app.use(express.json());

//Import Routers
const usersRouter = require("./routes/userRouter")
const roleRouter = require("./routes/roleRouter");
const productsRouter = require("./routes/productsRouter");
const categoryRouter = require("./routes/categoryRouter");
const cartRouter = require("./routes/cartRouter");


// Handles any other endpoints 
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

//Routes MiddleWare
app.use("/role",roleRouter);
app.use("/users",usersRouter);
app.use("/product",productsRouter);
app.use("/cart",cartRouter);
app.use("/category",categoryRouter);

//Server Log
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

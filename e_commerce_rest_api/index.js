const express = require("express");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");
const connectDB = require("./db")
const PORT = process.env.PORT || 7000;

dotenv.config();
//db connection
connectDB();
const app = express();

//all api hear
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);

app.listen(PORT,()=>{
    console.log(`server runing on port ${PORT}`);
})
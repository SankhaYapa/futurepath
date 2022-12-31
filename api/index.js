const express=require("express");
const app=express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const courseRoute=require("./routes/courseroute")

dotenv.config()

mongoose.connect(process.env.MONGO_URL,() => {
    console.log("Connected to MongoDB");
  });
  
//middleware
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

// app.get("/",(req,res)=>{
//     res.send("welcome")
// })
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/courseroute",courseRoute)

app.listen(8800,()=>{
    console.log("Backend server is running")
})
const express=require("express");
const app=express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

var pyshell =  require('python-shell');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));

const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const courseRoute=require("./routes/courseroute")
const gigRoute = require("./routes/gigs");
const jobRoute=require("./routes/jobs")
const advicerRoute=require("./routes/advicer")
const conversaionRoute = require("./routes/conversaion");
const messagesRoute = require("./routes/messages");


app.use(cors());
// Recommendation part
app.post('/api/careerpath', (req, res) => {
  const {cvtext} = req.body;
  fs.writeFileSync('cv.txt', cvtext, 'utf-8');
  // const options = {
  //   mode: "text",
  //   pythonPath: "python",
  //   pythonOptions: ["-u"],
  //   scriptPath: ".",
  //   args: [req.body.cvtext]
  // };

  // pyshell.PythonShell.run("careerpath.py", options, (err, results) => {
  //   if (err) throw err;

  //   res.send(results[0]);
  //   console.log(results)
    
  // });
  pyshell.PythonShell.run('./careerpath.py', { args: ['./cv.txt'] }, function (err) {
    if (err) throw err;
    res.send(results[0]);
    console.log(results)
    console.log('career path extracted');
  });
});



//end recommendation part

const multer = require("multer");
const path = require("path");

dotenv.config()

mongoose.connect(process.env.MONGO_URL,() => {
    console.log("Connected to MongoDB");
  });
  
app.use("/images", express.static(path.join(__dirname, "public/images")));  
//middleware
app.use(express.json());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    // ...
  })
);
app.use(morgan("common"))


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/gig");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name); 
  },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.log(error);
  }
});
// app.get("/",(req,res)=>{
//     res.send("welcome")
// })
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/courseroute",courseRoute)
app.use("/api/gigs", gigRoute)
app.use("/api/jobs",jobRoute)
app.use("/api/advicer",advicerRoute)
app.use("/api/conversation", conversaionRoute);
app.use("/api/messages", messagesRoute);

app.listen(8800,()=>{
    console.log("Backend server is running")
})
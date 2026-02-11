const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");
const {validateSignUpData} = require('./utils/validation.js');
const bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const {jwtAuth, userAuth} = require("../middlewares/auth.js")


app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    validateSignUpData(req.body);
    const { firstName, lastName, emailId, password, gender, age, skills } = req.body; 
    const userEmail = await User.findOne({ emailId });
    if (userEmail) {
      return res.status(409).json({ message: "userEmail already exists" });
    }
   
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    

    const user = await User.create({
      firstName,
      lastName,
      emailId,
      password:passwordHash,
    });
    res.status(200).send("Registration successfull");
  } catch (err) {
    res.status(500).json("SIGNUP FAILED: "+err.message);
  }
});

app.post('/login',async(req,res)=>{
  try{
    const { emailId, password} = req.body;
    
    const user = await User.findOne({emailId})
    if(!user){
      throw new Error("Invalid Credentials");
    }
    // console.log(user.password)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(isPasswordValid){
      const token = await jwt.sign({_id:user._id}, "DEV@Tinder$790", {expiresIn:"1d"});
      //console.log(token);
      res.cookie("token",token);
      res.status(200).send("Login successfull")
    }else{
      throw new Error("Invalid Credentials");
    }
    
    
  }catch(err){
    res.status(500).send("something went wrong"+ err.message)
  }
})

app.get('/profile', jwtAuth, async(req,res)=>{
  const user = req.user;
  res.status(200).send(user)
})

app.post('/sendConnectionRequest',jwtAuth, async(req,res)=>{
  const user = req.user;
  res.send(user.firstName + " send connection request")
})

connectDB()
  .then(() => {
    console.log("Database Connection established...");
    app.listen(3000, () => {
      console.log("server is successfully listening on port-3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!!");
    process.exit(1);
  });

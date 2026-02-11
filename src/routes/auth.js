const express = require('express');
const authRouter = express.Router();
const {validateSignUpData} = require('../utils/validation.js');
const User = require("../models/user.js");
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const {jwtAuth, userAuth} = require("../../middlewares/auth.js")

authRouter.post("/signup", async (req, res) => {
  // console.log(req.body);
  try {
    validateSignUpData(req.body);
    const { firstName, lastName, emailId, password, gender, age, skills } = req.body; 
    const userEmail = await User.findOne({ emailId });
    if (userEmail) {
      return res.status(409).json({ message: "userEmail already exists" });
    }
   
    const passwordHash = await bcrypt.hash(password, 10);
    // console.log(passwordHash);
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
authRouter.post('/login',async(req,res)=>{
  try{
    const { emailId, password} = req.body;
    
    const user = await User.findOne({emailId})
    if(!user){
      throw new Error("Invalid Credentials");
    }
    // console.log(user.password)
    const isPasswordValid = await user.validatePassword(password);

    if(isPasswordValid){
      const token = await user.getJWT();
      //console.log(token);
      res.cookie("token",token,{
        expires: new Date(Date.now()+ 8* 3600000),
      });
      res.status(200).send("Login successfull")
    }else{
      throw new Error("Invalid Credentials");
    }
    
    
  }catch(err){
    res.status(500).send("something went wrong"+ err.message)
  }
})
module.exports = authRouter;
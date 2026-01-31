const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require('./models/user.js')
app.use(express.json());

app.post('/signup',async(req,res)=>{
    console.log(req.body);
    try{
        const {firstName, lastName, emailId , password} = req.body;
        
        if(!firstName | !lastName | !emailId | !password){
            res.status(404).json({message:"All field required"});
        }
        const userEmail = await User.findOne({emailId});
        if(userEmail){
            res.status(404).json({message:"userEmail already exists"});
        }
        const user = await User.create({
            firstName,
            lastName,
            emailId,
            password
        });
        res.status(200).send({message:"User registered succesfully",user})
    }catch(err){
        res.status(500).json("Something went wrong");
    }
    
})


connectDB().then(()=>{
    console.log("Database Connection established...");
    app.listen(3000,()=>{
        console.log("server is successfully listening on port-3000");
    });
})
.catch((err)=>{
    console.error("Database cannot be connected!!!");
    process.exit(1)
})





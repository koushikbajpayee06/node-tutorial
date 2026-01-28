const express = require("express");
const {adminAuth, userAuth} = require('../middlewares/auth.js')
const app = express();


app.get('/getUserData',(req,res)=>{
    try{
        throw new Error("nfnfkdggkfd");
        res.send("User Data send");
    }catch(err){
        res.status(500).send("Some error contact support team");
    }
});

app.use("/",(err, req, res ,next)=>{
    if(err){
        res.status(500).send("Error in the Code....")
    }
});

app.listen(3000,()=>{
    console.log("server is successfully listening on port-3000");
});
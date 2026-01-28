const express = require("express");
const {adminAuth, userAuth} = require('../middlewares/auth.js')
const app = express();

app.use('/admin',adminAuth);

app.use('/user',userAuth,(req,res)=>{
    res.send("User data send");
});

app.use('/admin/getAllData',(req,res)=>{
    res.send("User data send");
});

app.get('/admin/deleteUser',(req,res)=>{
    res.send("Deleted a user");
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port-3000");
});
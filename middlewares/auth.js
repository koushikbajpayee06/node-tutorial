var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const User = require("../src/models/user.js");

const jwtAuth = async (req,res,next)=>{
   try{
        const {token} = req.cookies;
        if(!token){
        throw new Error("Invalid Token")
        }
        const decodedMessage = jwt.verify(token, "DEV@Tinder$790");
        const {_id} = decodedMessage;
        const user = await User.findById(_id);
        if(!user){
        throw new Error("User does not exist");
        }
        // console.log("Logged In user is: " +user.firstName+ ' '+ user.lastName);
        req.user = user;
        next();
   }catch(err){
    res.status(404).send("Somthing went wrong"+err.message);
   }

}
const userAuth = (req,res,next)=>{
    // console.log("User auth getting checked");
    const token = "PQR";
    const isUserAuthorized = token ==="PQR";
    if(!isUserAuthorized){
        res.status(404).send("Unauthorized request");
    }else{
        next();
    }
}



module.exports = {userAuth, jwtAuth}


const express = require('express');
const profileRouter = express.Router();
const {jwtAuth, userAuth} = require("../../middlewares/auth.js")
const {validateProfileEditData} = require("../utils/validation.js")


profileRouter.get('/profile/view', jwtAuth, async(req,res)=>{
  const user = req.user;
  res.status(200).send(user)
});

profileRouter.patch("/profile/edit", jwtAuth, async(req,res)=>{
    try{
        if(!validateProfileEditData(req)){
            throw new Error("invalid Edit Request");
        }
        const loggedInUser = req.user;
        console.log(loggedInUser);
        Object.keys(req.body).forEach(key=>loggedInUser[key] = req.body[key]);   
        console.log(loggedInUser);
        res.json({
            message:`${loggedInUser.firstName}, Your Profile updated successfully`,
            data:loggedInUser,
        });
        await loggedInUser.save();

    }catch(err){
        res.status(400).send("ERROR: "+ err.message);
    }
});

profileRouter.post('/profile/password',async(req,res)=>{
    res.send("Password reset successfully")
})

module.exports = profileRouter
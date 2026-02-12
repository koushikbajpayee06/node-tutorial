const express = require("express");
const { jwtAuth } = require("../../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequests");
const userRouter = express.Router();

userRouter.get("/user/requests/recived",jwtAuth, async(req,res)=>{
    try{
        const loggedInUser = req.user._id;
        const connectionRequest = await ConnectionRequestModel.find({
            toUserId: loggedInUser._id,
            status: "interested"
        }).populate("fromUserId","firstName lastName photoUrl age gender about skills");
        res.status(200).json({message:"Data fetched successfully",
            data: connectionRequest
        })
    }catch(err){
        res.status(400).send({message:"ERROR: "+ err.message})
    }
})

module.exports = userRouter;
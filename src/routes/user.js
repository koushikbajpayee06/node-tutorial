const express = require("express");
const { jwtAuth } = require("../../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequests");
const userRouter = express.Router();

const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills"
userRouter.get("/user/requests/recived",jwtAuth, async(req,res)=>{
    try{
        const loggedInUser = req.user._id;
        const connectionRequest = await ConnectionRequestModel.find({
            toUserId: loggedInUser._id,
            status: "interested"
        }).populate("fromUserId", USER_SAFE_DATA);
        res.status(200).json({message:"Data fetched successfully",
            data: connectionRequest
        })
    }catch(err){
        res.status(400).send({message:"ERROR: "+ err.message})
    }
});

userRouter.get('/user/requests/connections', jwtAuth, async(req,res)=>{
    try{
        const loggedInUser = req.user;
    const connectionRequests = await ConnectionRequestModel.find({
        $or:[
            {toUserId: loggedInUser._id, status:"accepted"},
            {fromUserId: loggedInUser._id, status:"accepted"}
        ]
    }).populate("fromUserId" ,USER_SAFE_DATA);

    const data = connectionRequests.map((row) => row.fromUserId)
    res.json({message:"Connections fetch Succesfull", data:data})
    }catch(err){
        res.status(400).send({message:err.message})
    }
})

module.exports = userRouter
const express = require('express');
const requestRouter = express.Router();
const {jwtAuth, userAuth} = require("../../middlewares/auth.js")

requestRouter.post('/sendConnectionRequest',jwtAuth, async(req,res)=>{
  const user = req.user;
  res.send(user.firstName + " send connection request")
})
module.exports = requestRouter
const express = require('express');
const profileRouter = express.Router();
const {jwtAuth, userAuth} = require("../../middlewares/auth.js")


profileRouter.get('/profile', jwtAuth, async(req,res)=>{
  const user = req.user;
  res.status(200).send(user)
})

module.exports = profileRouter
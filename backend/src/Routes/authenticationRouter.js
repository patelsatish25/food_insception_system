const express=require('express')
const {Login, SignUp}=require("../controller/authetication")
const AuthRouter=express.Router();
AuthRouter.post("/login",Login)
AuthRouter.post("/signup",SignUp)

module.exports=AuthRouter;
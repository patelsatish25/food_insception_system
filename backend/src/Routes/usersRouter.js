const express=require('express')
const {getAllUsers,addUser}=require("../controller/users")
const usersRouter=express.Router();
usersRouter.get("/all",getAllUsers)
usersRouter.post("/add",addUser)

module.exports=usersRouter;
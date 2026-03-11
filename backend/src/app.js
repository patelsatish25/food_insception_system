const express=require('express');
const DbConnect=require("../src/config/dbconnect")
const AuthRouter=require("./Routes/authenticationRouter")
const foodRouter=require("./Routes/foodsRouters")
const cors=require('cors')
const app=express();
DbConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.use("/api/auth",AuthRouter)
app.use("/api/food",foodRouter)

module.exports=app;
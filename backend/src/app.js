const express=require('express');
const DbConnect=require("../src/config/dbconnect")
const AuthRouter=require("./Routes/authenticationRouter")
const foodRouter=require("./Routes/foodsRouters")
const usersRouter=require("./Routes/usersRouter")   
const logRouter=require("./Routes/logRouters")
const cors=require('cors')
const app=express();
DbConnect()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/auth",AuthRouter)
app.use("/api/food",foodRouter)
app.use("/api/users",usersRouter)
app.use("/api/logs",logRouter)

module.exports=app;
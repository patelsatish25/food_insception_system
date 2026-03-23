const express=require('express')
const {getAllLogs,saveLogData}=require("../controller/logControl")
const logRouter=express.Router();
logRouter.get("/all",getAllLogs)
logRouter.post("/add",saveLogData)

module.exports=logRouter;
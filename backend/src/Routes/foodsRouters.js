const express=require('express')
const {saveSessionData,getALLSessioData,getSessionData}=require("../controller/sessionControl")
const foodRouter=express.Router();
foodRouter.get("/sessiondata/:id",getSessionData )
foodRouter.get("/sessiondata",getALLSessioData)
foodRouter.post("/sessiondata",saveSessionData)
module.exports=foodRouter;
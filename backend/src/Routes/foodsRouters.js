const express=require('express')
const {saveSessionData,getALLSessioData,getSessionData,getAnalytics,getAllFoods}=require("../controller/sessionControl")
const foodRouter=express.Router();
foodRouter.get("/sessiondata/:id",getSessionData )
foodRouter.get("/sessiondata",getALLSessioData)
foodRouter.post("/sessiondata",saveSessionData)
foodRouter.get("/analytics",getAnalytics)
foodRouter.get("/allfoods",getAllFoods)
module.exports=foodRouter;
const sessionSchemaModel=require("../model/sessionModel")
const saveSessionData= async(req,res)=>{
    try
    {

        const data=req.body;
 
  
  
        const session=new sessionSchemaModel({
               session:data.session,
               food_inspection:data.food_inspection
     
        })
        const resultSession=await session.save();
        return   res.send(resultSession)
    }catch(error)
    {
       return res.status(400 ).json({"message":"data is not valid"})
    }

}
const getALLSessioData=async(req,res)=>{
    try{
         sessions=await sessionSchemaModel.find({})
         return res.json({data:sessions})
         
    }catch(error){
        return res.json({"message":error})
    }

}

const getSessionData=async(req,res)=>{
    try{
           const id=req.params.id;
           console.log(id)
           resultSession=await sessionSchemaModel.findById(id);
           return res.send(resultSession);
    }catch(error)
    {
        console.log()
    }
}
module.exports={saveSessionData,getALLSessioData,getSessionData};
const userModel=require('../model/autheticationModel')
const bcrypt=require("bcrypt")
const getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
}
const addUser=async(req,res)=>{
   const {username,password,email}=req.body;
      if(!username)
      {
         return res.status(400).json({error:"username is missning",file:"username"})
       }
      

      if(!password)
       {
         return  res.status(400).json({error:"password is missning",file:"password"})
       }
  
     if(!email)
      {
        return  res.status(400).json({error:"email is missning",file:"email"})
      }
      let isUserExists=await userModel.findOne({username:username});
     
      if(isUserExists)
      {
        return res.status(409).json({error:"username is allredy exists"})
      }
      let EncryptPassword=await bcrypt.hash(password,10)
      const user=new userModel({
        username:username,
        password:EncryptPassword,
        email:email,
        date:Date.now()
      })
      
      let resdb=await user.save();
      res.status(200  ).json(resdb);
}   
module.exports={getAllUsers,addUser}
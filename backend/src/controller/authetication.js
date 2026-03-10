const userModel=require('../model/autheticationModel')
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')
const Login=async(req,res)=>{
     const {username ,password}=req.body;
     if(!username || !password)
     {
      
      return res.json({error:"flied is missing"});
   
    }
    const user=await userModel.findOne({username:username});
    if(!user)
    {
    return  res.status(401).json({error:"username and password is Invalid"});
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    
    if(!isPasswordValid)
    {
      return res.status(401).json({error:"username and password is Invalid"});
    }
   let token= jwt.sign({userID:user._Id,username:user.username},"qwerty@123");
   res.status(200).json({msg:"username and password is valid",token:token})
  
     
}
const SignUp=async(req,res)=>{
    const {username,password,email}=req.body;
    if(!username)
    {
       return res.status(400).json({error:"username is missning"})
    
    }
    if(!password)
     {
       return  res.status(400).json({error:"password is missning"})
     }

   if(!email)
    {
      return  res.status(400).json({email:"email is missning"})
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
module.exports={Login,SignUp}
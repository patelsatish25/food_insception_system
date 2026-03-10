const mongodb=require('mongoose')
function DbConnect()
{
    try{
        mongodb.connect("mongodb://localhost:27017/FoodInspection")
        console.log("DB connect")
    }catch(error)
    {
              console.log("db connect error")
              console.log(error)
    }
}
module.exports=DbConnect
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
   fname : String ,
   lname : String ,
   tel : String ,
   login : String ,
   password : String ,
   category : String,
   subCategory :{
      type :  [
         {
            name : String , 
            price : Number
         }
      ],
      default : null
   },
   role : {
      type : String,
      default : "user"
   }
})


const userModel = mongoose.model('userModel' , userSchema)

module.exports = userModel

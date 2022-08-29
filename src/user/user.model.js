const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
   fname : String ,
   lname : String ,
   tel : String ,
   login : String ,
   password : String ,
   category : String
})


const userModel = mongoose.model('userModel' , userSchema)

module.exports = userModel
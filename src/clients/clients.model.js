const mongoose = require('mongoose')


const clientsSchema = mongoose.Schema({
   fname : String ,
   lname : String ,
   adress : String ,
   year : String,
   category : String,
   subCategory : [
      {
         name : String,
         price : Number
      }
   ],
   price : Number
})


const clientsModel = mongoose.model('clientsModel' , clientsSchema)

module.exports = clientsModel
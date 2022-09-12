const mongoose = require('mongoose')


const clientsSchema = mongoose.Schema({
   fname : String ,
   lname : String ,
   adress : String ,
   year : String,
   category : String,
   date : String,
   month : Number,
   subCategory : [
      {
         name : String,
         price : Number
      }
   ],
   price : Number,
   dailyCount : Number
})


const clientsModel = mongoose.model('clientsModel' , clientsSchema)

module.exports = clientsModel
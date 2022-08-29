const mongoose = require('mongoose')


const bedroomSchema = mongoose.Schema({
   roomNumber : Number,
   floor : Number,
   bedNumber : Number,
   status : Boolean,
   price : Number,
})


const bedroomModel = mongoose.model('bedroomModel' , bedroomSchema)

module.exports = bedroomModel
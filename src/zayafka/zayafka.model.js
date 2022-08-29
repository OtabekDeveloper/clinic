const mongoose = require('mongoose')


const zayafkaSchema = mongoose.Schema({
   fname : String,
    lname : String,
    start : String,
    end : String,
    bedRoomId : mongoose.Schema.Types.ObjectId,
    total : Number
})


const zayafkaModel = mongoose.model('zayafkaModel' , zayafkaSchema)

module.exports = zayafkaModel
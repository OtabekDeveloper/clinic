const zayafkaModel = require('./zayafka.model')

async function addzayafka( req ,res ){
   try{
      let result = await zayafkaModel.create(req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getzayafka(req , res){
   try{
      const zayafka = await zayafkaModel.find({})
      return res.status(200).send(zayafka)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function deletezayafka(req , res){
   try{
      let zayafkaId = req.params.id
      let result = await zayafkaModel.findByIdAndDelete(zayafkaId)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function updatezayafka(req , res){
   try{
      let zayafkaId = req.params.id
      let result = await zayafkaModel.findByIdAndUpdate(zayafkaId , req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

module.exports = {
   addzayafka , 
   getzayafka ,
   deletezayafka ,
   updatezayafka
}

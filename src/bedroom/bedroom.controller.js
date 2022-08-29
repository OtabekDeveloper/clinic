const bedroomModel = require('./bedroom.model')

async function addbedroom( req ,res ){
   try{
      const bedroom = await bedroomModel.findOne({
         roomNumber : req.body.roomNumber,
         floor : req.body.floor,
         bedNumber: req.body.bedNumber
      })
      if(bedroom){
         return res.status(401).send('ushbu joy  mavjud')
      }
      let natija = await bedroomModel.create(req.body)
      return res.status(200).send(natija)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getbedroom(req , res){
   try{
      const bedroom = await bedroomModel.find({})
      return res.status(200).send(bedroom)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function deletebedroom(req , res){
   try{
      let bedroomId = req.params.id
      let result = await bedroomModel.findByIdAndDelete(bedroomId)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function updatebedroom(req , res){
   try{
      let bedroomId = req.params.id
      let result = await bedroomModel.findByIdAndUpdate(bedroomId , req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

module.exports = {
   addbedroom , 
   getbedroom ,
   deletebedroom ,
   updatebedroom
}

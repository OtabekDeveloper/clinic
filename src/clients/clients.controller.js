const clientsModel = require('./clients.model')

async function addclients( req ,res ){
   try{
      let count = await clientsModel.find({
         date : req.body.date,
         category : req.body.category
      })
      let cliet = {
         fname : req.body.fname ,
         lname : req.body.lname ,
         adress : req.body.adress ,
         year : req.body.year,
         category : req.body.category,
         date : req.body.date,
         subCategory : req.body.subCategory,
         price : req.body.price,
         dailyCount : count.length + 1
      }
      let result = await clientsModel.create(cliet)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getclients(req , res){
   try{
      const clients = await clientsModel.find({})
      return res.status(200).send(clients)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getDay(req , res){
   try{
      const clients = await clientsModel.find({
         date : req.body.date,
         category : req.body.category
      })
      return res.status(200).send(clients)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function deleteclients(req , res){
   try{
      let clientsId = req.params.id
      let result = await clientsModel.findByIdAndDelete(clientsId)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function updateclients(req , res){
   try{
      let clientsId = req.params.id
      let result = await clientsModel.findByIdAndUpdate(clientsId , req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

module.exports = {
   addclients , 
   getclients ,
   deleteclients ,
   updateclients,
   getDay
}

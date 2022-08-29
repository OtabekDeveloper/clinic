const clientsModel = require('./clients.model')

async function addclients( req ,res ){
   try{
      let result = await clientsModel.create(req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send('hato')
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
   updateclients
}

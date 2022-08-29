const userModel = require('./user.model')

async function addUser( req ,res ){
   try{
      const user = await userModel.findOne({
         login : req.body.login,
         password: req.body.password
      })
      
      if(user){
         return res.status(401).send('ushbu Login/parol mavjud')
      } 
      let natija = await userModel.create(req.body)
      return res.status(200).send(natija)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getUser(req , res){
   try{
      const user = await userModel.find({})
      return res.status(200).send(user)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function getCategory(req , res){
   try{
      const user = await userModel.aggregate([
         {
            $group : {
               _id : {category : "$category" , subCategory : "$subCategory"}
            }
         }
      ])
      return res.status(200).send(user)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function deleteUser(req , res){
   try{
      let userId = req.params.id
      let result =await userModel.findByIdAndDelete(userId)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

async function updateUser(req , res){
   try{
      let userId = req.params.id
      let result = await userModel.findByIdAndUpdate(userId , req.body)
      return res.status(200).send(result)
   }catch(err){
      return res.status(400).send(err)
   }
}

module.exports = {
   addUser , 
   getUser ,
   deleteUser ,
   updateUser ,
   getCategory
}

const Clients = require('../clients/clients.model')


async function Month(req,res){
    try{
        let result = await Clients.aggregate([
            {$group : {
                _id : {month : "$month" ,total : {$sum : "$price"} },
            }}
            
        ])

        return res.status(200).send(result)
    }catch(err){
        return res.status(400).send(err)
    }
}

async function Doctor(req,res){
    try{
        let result = await Clients.aggregate([
            {$match : {category : req.body.category}},
            {$group : {
                _id : {month : "$month" ,total : {$sum : "$price"} },
            }}
            
        ])

        return res.status(200).send(result)
    }catch(err){
        return res.status(400).send(err)
    }
}

async function MonthDoctor(req,res){
    try{
        let result = await Clients.aggregate([
            {$match : {month : req.body.month}},
            {$group : {
                _id : {month : "$month" ,total : {$sum : "$price"} },
            }}
        ])

        return res.status(200).send(result)
    }catch(err){
        return res.status(400).send(err)
    }
}

async function MonthDoctor(req,res){
    try{
        let result = await Clients.aggregate([
            {$match : {month : req.body.month}},
            {$group : {
                _id : {month : "$month" , category : "$category" , total : {$sum : "$price"} },
            }}
        ])
       
        return res.status(200).send(result)
    }catch(err){
        return res.status(400).send(err)
    }
}

async function ClientCount(req,res){
    try{
        let month = [0,1,2,3,4,5,6,7,8,9,10,11]
        let result = []
        let clients = await Clients.aggregate([
            {$group : {
                _id : {month : "$month" ,  total : {$sum : "$price"} },
            }}
        ])
        for(let i of month){
            let foo = {
                month : i,
                total : 0
            }
            for(let j of clients){
                if(foo.month == j._id.month){
                    foo.total = j._id.total
                }
            }
            result.push(foo)
        }
       
        return res.status(200).send(result)
    }catch(err){
        return res.status(400).send(err)
    }
}

module.exports = {
    Month,
    Doctor,
    MonthDoctor,
    ClientCount
}
const userModel = require("../user/user.model")
async function User(req , res) {
    try{
        let user = await userModel.findOne({
            login : req.body.login,
            password : req.body.password
        })
        if(!user){
            return res.status(401).send("login/parol hato kiritildi")
        }
        return res.status(200).send(user)
    } catch(err){
        return res.status(400).send(err)
    }
}

module.exports = {
    User
}
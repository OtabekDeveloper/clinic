const express = require('express')
const router = express.Router()  

const userController = require('./user.controller')

router.route('/').post(userController.addUser)

router.route('/').get(userController.getUser)

router.route('/:id').put(userController.updateUser)

router.route('/:id').delete(userController.deleteUser)



module.exports = router
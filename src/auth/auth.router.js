const express = require('express')
const router = express.Router()  

const authController = require('./auth.controller')

router.route('/user').post(authController.User)

module.exports = router
const express = require('express')
const router = express.Router()  

const clientsController = require('./clients.controller')

router.route('/').post(clientsController.addclients)

router.route('/day').post(clientsController.getDay)

router.route('/').get(clientsController.getclients)

router.route('/:id').put(clientsController.updateclients)

router.route('/:id').delete(clientsController.deleteclients)



module.exports = router
const express = require('express')
const router = express.Router()  

const bedroomController = require('./bedroom.controller')

router.route('/').post(bedroomController.addbedroom)

router.route('/').get(bedroomController.getbedroom)

router.route('/:id').put(bedroomController.updatebedroom)

router.route('/:id').delete(bedroomController.deletebedroom)



module.exports = router
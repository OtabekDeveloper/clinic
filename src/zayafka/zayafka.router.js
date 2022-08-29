const express = require('express')
const router = express.Router()  

const zayafkaController = require('./zayafka.controller')

router.route('/').post(zayafkaController.addzayafka)

router.route('/').get(zayafkaController.getzayafka)

router.route('/:id').put(zayafkaController.updatezayafka)

router.route('/:id').delete(zayafkaController.deletezayafka)



module.exports = router
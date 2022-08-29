const express = require('express')
const router = express.Router()
const userRouter = require('./user/user.router')
const bedroomRouter = require('./bedroom/bedroom.router')
const clientsRouter = require('./clients/clients.router')
const zayafkaRouter = require('./zayafka/zayafka.router')
const authRouter = require('./auth/auth.router')

router.use('/auth' , authRouter)
router.use('/user' , userRouter)
router.use('/bedroom' , bedroomRouter)
router.use('/client' , clientsRouter)
router.use('/zayafka' , zayafkaRouter)

module.exports = router
const express = require('express')
const router = express.Router()  

const reportController = require('./report.controller')

router.route('/monthTotal').post(reportController.Month)
router.route('/doctor').post(reportController.Doctor)
router.route('/monthDoctor').post(reportController.MonthDoctor)
router.route('/clientCount').post(reportController.ClientCount)

module.exports = router
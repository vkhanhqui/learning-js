const express = require('express')
const router = express.Router()

const studentController = require('../app/controllers/StudentController')


router.use('/', studentController.index)


module.exports = router;
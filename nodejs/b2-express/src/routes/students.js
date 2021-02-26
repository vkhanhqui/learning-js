const express = require('express')
const router = express.Router()

const studentController = require('../app/controllers/StudentController')

router.get('/', studentController.index)
router.get('/:name', studentController.showByName)

module.exports = router;
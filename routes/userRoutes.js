const { signup } = require('../controllers/userController')
const router = require('express').Router()
router.route('/signup').post(signup)


module.exports = router
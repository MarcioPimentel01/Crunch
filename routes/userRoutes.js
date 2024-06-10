const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/signup', userController.signup);
router.post('/signup', userController.createUser);
router.get('/login', userController.login);
router.post('/login', userController.authenticate);

module.exports = router;
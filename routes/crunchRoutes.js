const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/crunchController');

router.get('/', tweetController.timeline);
router.get('/new', tweetController.newCrunch);
router.post('/', tweetController.createCrunch);

module.exports = router;
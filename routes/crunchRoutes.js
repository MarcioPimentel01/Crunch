const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.get('/', tweetController.timeline);
router.get('/new', tweetController.newTweet);
router.post('/', tweetController.createCrunch);

module.exports = router;
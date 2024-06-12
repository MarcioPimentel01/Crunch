const { Crunch, User } = require('../models');

exports.timeline = async (req, res) => {
  const crunch = await Crunch.findAll({ include: User });
  res.render('crunch/timeline', { crunch });
};

exports.newTweet = (req, res) => {
  res.render('crunch/crunch');
};

exports.createTweet = async (req, res) => {
  const { content } = req.body;
  await Tweet.create({ content, UserId: req.session.userId });
  res.redirect('/crunch');
};
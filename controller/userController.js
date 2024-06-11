const bcrypt = require('bcryptjs');
const { User } = require('../models');

exports.signup = (req, res) => {
  res.render('users/signup');
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, password: hashedPassword });
  res.redirect('/login');
};

exports.login = (req, res) => {
  res.render('users/login');
};

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    res.redirect('/crunch');
  } else {
    res.redirect('/login');
  }
};
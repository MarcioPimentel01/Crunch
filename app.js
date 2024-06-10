const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { sequelize } = require('./models');
const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: true }));

const userRoutes = require('./routes/userRoutes');
const crunchRoutes = require('./routes/crunchRoutes');
app.use('/', userRoutes);
app.use('/tweets', crunchRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});

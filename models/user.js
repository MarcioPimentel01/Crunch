// models/user.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    User.associate = function(models) {
      User.hasMany(models.Crunch);
    };
    return User;
  };
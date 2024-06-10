
  
  // models/crunch.js
  module.exports = (sequelize, DataTypes) => {
    const Crunch = sequelize.define('Crunch', {
      content: DataTypes.STRING,
    });
    Crunch.associate = function(models) {
      Crunch.belongsTo(models.User);
    };
    return Crunch;
  };
  
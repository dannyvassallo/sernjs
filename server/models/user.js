'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email_address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
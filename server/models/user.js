'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    instanceMethods: {
      generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
    }
  });

  User.hook('beforeCreate', function(user, options) {
    user.password = user.generateHash(user.password);
  });

  return User;
};

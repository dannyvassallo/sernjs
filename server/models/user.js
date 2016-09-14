'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      validPassword: function(password, passwd, done, user){
        bcrypt.compare(password, passwd, function(err, isMatch){
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false);
          }
          if(err){
            console.log(err);
          }
        });
      }
    }
  });

  User.hook('beforeCreate', function(user, options) {
    var salt = bcrypt.genSalt(12, function(err, salt){
      return salt;
    });
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err) return next(err);
      user.password = hash;
      return fn(null, user);
    });
  });

  return User;
};

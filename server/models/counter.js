'use strict';
module.exports = function(sequelize, DataTypes) {
  var Counter = sequelize.define('counter', {
    count: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Counter;
};

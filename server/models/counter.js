'use strict';
module.exports = function(sequelize, DataTypes) {
  var Counter = sequelize.define('Counter', {
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

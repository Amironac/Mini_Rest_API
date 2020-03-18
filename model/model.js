var Sequelize = require("sequelize");
var db = require("../config/database");

var User = db.define('baza', {
    Email: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    }
  });

module.exports = User;
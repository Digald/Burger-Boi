// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize OR heroku
var sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("burger_boi", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

module.exports = sequelize;

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Create a burger model that matches with the DB
var Burger = sequelize.define("burgers", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN
});

// Syncs table schema with DB
Burger.sync();

// Export module
module.exports = Burger;
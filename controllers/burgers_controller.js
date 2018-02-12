// routes go here

// Depenencies
var Burger = require("../models/burger.js");

// Routes
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.post("/api/new", function(req, res) {
    console.log(req.body);
    // Use sequelize to create new burger into database
    Burger.create({
      burger_name: req.body.burger,
      devoured: req.body.devoured
    }).then(function(results) {
      res.json(results);
    });
  });

};

// routes go here

// Depenencies
var Burger = require("../models/burger.js");

// Routes
module.exports = function(app) {
  //index route to get all burgers
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(results) {
      console.log(results);
      var currentBurgerList = {};
      // for (i in results) {
      //   currentBurgerList += results[i].dataValues;
      // }
      res.render("index", { burger: currentBurgerList });
    });
  });

  // GET all burgers from DB
  //   app.get("/api/all", function(req, res) {
  //     Burger.findAll({}).then(function(results) {
  //       res.json(results);
  //     });
  //   });
  // POST new burger to DB
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

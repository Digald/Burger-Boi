// routes go here

// Depenencies
var Burger = require("../models/burger.js");

// Routes
module.exports = function(app) {
  //index route to get all burgers
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(results) {
      var allBurgers = [];
      for (i in results) {
        allBurgers.push(results[i].dataValues);
      }
      console.log(allBurgers);
      res.render("index", { burger: allBurgers });
    });
  });

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

  app.put("/api/:id", function(req, res) {
    Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/:id", function(req, res) {
    Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });
};

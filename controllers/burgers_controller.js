// routes go here

// Depenencies 
var Burger = require("../models/burger.js");

// Routes
module.exports = function(app){
    app.get('/', function(req, res){
        res.render("index");
    });
}

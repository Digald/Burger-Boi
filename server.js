// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var Handlebars = require('handlebars');

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parser from documentation
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Access static directory
app.use(express.static(__dirname + "/public"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

Handlebars.registerHelper('equal', function(lvalue, rvalue, options) {
  if (arguments.length < 3)
      throw new Error("Handlebars Helper equal needs 2 parameters");
  if( lvalue!=rvalue ) {
      return options.inverse(this);
  } else {
      return options.fn(this);
  }
});

//Routes
require('./controllers/burgers_controller.js')(app);

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parser from documentation
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Access static directory
app.use(express.static("/public"));

//Routes

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//API bodyParser , express, path
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
//MAKE A VARIBLE Port
var PORT = process.env.PORT || 8080;
 

//Express/Connect top-level generic
// parse application/x-www-form-urlencoded 

 
// parse application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
 

// include our API first beacuse it pull our data 
//display inside the HTML

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//LISTEN
//CONSOLE.LOG : WE KNOW  that the server had started runing 
//whatever we press out new dot j/s
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});

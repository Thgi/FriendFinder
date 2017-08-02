
//html routes are to help direct  the user whenever they click on the links 
//the routers will understand bases on the informationin this file what page to deliver to them
// var express = require('express');
// var app = express();

var path = require('path');
//using another that we can module exports to bring the data from here into other files
//next user URL i want to send them different pages 
//so i need a way for them to get to home reservation and table list
//send the file using EXPRESS and note

//app.get('/', function(req, res) : whenever we get this URL for the user in this case the root 
//we want you to execute this function
//this function is to send the user index.html when we're at localhost 8080
module.exports = function(app){

// viewed at http://localhost:8080

	app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	app.use(function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

// app.listen(8080);
}
//API routes are for our data that going to help determine 
//what data the user sees and user to post to our server to store 

//build function whatever you go to this URL slash API slash tables
//display the survey data in JSON format
//we need to include this routing files in our server json
var path = require('path');
var bodyParse = require('body-parser');
var friendsData = require('../data/friends.js');




module.exports = function(app){

	
	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});
	app.post('/api/friends', function(req, res){
		
		// var friendsArray = friendsData[0].name;
		// //for loop so that i can get the name each array
		// var photo = friendsData[1].photo;

		// var score = friendsData[2].score[3];
		//for loop friend object each one to get the score
		
		var user = req.body;
		var userScore = user.scores;

		for(var i = 0; i < userScore.length; i++){
			if(userScore[i] == "1 (Strongly Disagree)"){
				userScore[i] = 1;
			} else if (userScore[i] == "5 (Strongly Agree)"){
				userScore[i] = 5;
			} else{
				userScore[i] = parseInt(userScore[i]);
			}
		}

		var differenceArray = [];
		for(var i=0; i< friendsData.length; i++){
			var compareFriend = friendsData[i];
			var totalDifference = 0;
			for(var j = 0; j < compareFriend.scores.length; j++){
				var differentScores = Math.abs(compareFriend.scores[j] - userScore[j]);
				totalDifference += differentScores;
			}
			differenceArray[i] = totalDifference;
		}

		var bestFriendNum = differenceArray[0];
		var friendsIndex = 0;
		for (var k = 1; k < differenceArray.length; k ++){
			if (differenceArray[k] < bestFriendNum){
				 bestFriendNum = differenceArray[k];
				 friendsIndex = k;
			}		
		}
		friendsData.push(user);


		res.json(friendsData[friendsIndex]);
		
 	});
};



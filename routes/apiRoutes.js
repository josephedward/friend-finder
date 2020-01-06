var express = require('express');
var path= require("path");
var app = express();
var friends=require('../data/friends');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var friendScores=[];


module.exports = function(app) {
    app.get("/api/friends", function (req,res){
        res.json(friends);



    });


// Create New friends - takes in JSON input
app.post('/api/friends', function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
    // Using a RegEx Pattern to remove spaces from newfriend
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, '').toLowerCase();
    console.log(newfriend);


    scoreArr=[];

    var scoreTotal=0;
    for(x in newfriend.textArr)
    {
        textScore=sentiment.analyze(newfriend.textArr[x]);
        console.log(textScore);
        scoreArr.push([newfriend.textArr[x],textScore.score]);
        scoreTotal+=parseInt(textScore.score);

    }
    // console.log(scoreTotal);
    
    newfriend.scoreArr=scoreArr;
    newfriend.score=scoreTotal;
    friends.push(newfriend);

    //now need to find the nearest match
    // for(x in friends)
    // {
    //     console.log(friends[x].score);
    //     friendScores.push(friends[x].score);
    // }
    console.log("All Scores: "+friendScores);
    var goal=newfriend.score;
    console.log("Current User's Score: "+goal);
    if(friendScores.length!==0)
    {
    var closest = friendScores.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
      });
    }
      console.log("Nearest Match's Score: "+closest);
        //now we can push to the Array after check
      friendScores.push(goal);

      //need to locate friend with that score
     //put that in response
     //display with modal
     var friendMatch;
     for(x in friends)
     {
        if(friends[x].score===closest)
        {
            friendMatch=friends[x];
        }
     }

     console.log(friendMatch);

    res.json(friendMatch);
  });



    app.delete("/api/friends/:id", function (req,res){
    friends = friends.filter(function (num){
    return friends !==friends.indexOf(req.id);
    });
        // notes.splice(notes.indexOf(req.id), 1);
    });


}


//still have to be able to pull this friend when we figure out which one it is
//extract with its score...might be the wrong one? 
//can create a hash out of its scores? 




//************************************************************************* *///************************************************************************* *
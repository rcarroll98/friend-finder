// Dependencies
var express = require("express");
require("body-parser");
require("path");

app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
});

var surveyQuestions = [
    "How often do you go outside?",
    "How many friends do you have?",
    "How many pokemon have you caught in your lifetime?",
    "How much do you like the color green?",
    "What is your one rep max for squat?",
    "What is your ideal guy?",
    "Who is your favorite rapper?",
    "What is your favorite pasttime?",
    "What is your favorite food?",
    "What are your religious beliefs?"
];

var surveyAnswers = [
    1["Once a day",
    "Once a week",
    "Once a year",
    "Once a month"],
    2[
    "One",
    "2-3",
    "4-6",
    "6+"],
    3["Wtf?",
    "Less than 50",
    "More than 50",
    "Gotta catch em all"],
    4[
    "Its ok",
    "Its my favorite primary color",
    "Its my favorite color",
    "Green is the color of shrek, so green is life"],
    5[
    "Less than 50",
    "51-150",
    "151-200",
    "200+"],
    6[
    "Makes me breakfast in the morning",
    "Chiseld abs",
    "Knows a lot about anime",
    "Quiet and mysterious"]
    7[
    "Rap music is juvenile",
    "Yung lean",
    "Lil Lean",
    "Kendrick Lamar"],
    8[
    "Netflix",
    "Instagram",
    "Something in real life",
    "Blazing it"],
    9[
    "Flaming hot cheetos",
    "this question sucks",
    "...",
    "pizza?"],
    10[
    "Buddhism",
    "Christianity",
    "Islam",
    "Hinduism"]
]
var friends = [];

function friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
};

var makeFriend = new friend(name, photo, scores);



// loop that makes it so friends are generated on each click
// function that grabs results and puts them into an array

("#submit").onClick(function(){

    makeNewFriend();

})

// Function to create a new friend
function makeNewFriend(){
    
    for(i=0; i < friends.length; i++){

    }
};

function displaySurveyContent(surveyQuestions, surveyAnswers){

    let x = surveyQuestions.filter((element, index) => {
        return index % 4 == 0
    });

    for (var i = 0; i < surveyAnswers.length; i++) {
    };
    var parentQuestion 
    var childQuestion
    for (var i = 0; i < surveyQuestions.length; i++) {
}
    for (var i = 0; i < surveyAnswers.length; i++) {

    }
}
displaySurveyContent();


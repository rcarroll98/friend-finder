// Dependencies
var express = require("express");
require("body-parser");
require("path");

app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
});

var questionData = [
    {name:"How often do you go outside?", one: "Once a day", two:"Once a week" , three: "Once a year" , four:"Once a month"},
    {name: "How many friends do you have?", one: "One", two: "2-3", three:"4-6" , four: "6+"},
    {name:"How many pokemon have you caught in your lifetime?", one: "Wtf?", two: "Less than 50", three:"151-200" , four:"200+"},
    {name:"How much do you like the color green?", one: "Its ok", two: "Its my favorite primary color" , three:"Its my favorite color" , four: "Green is the color of shrek, so green is life"},
    {name:"What is your one rep max for squat?", one:"Less than 50", two: "51-150", three: "151-200" , four: "200+"},
    {name:"What is your ideal guy?", one: "Makes me breakfast in the morning", two: "Chiseld abs", three: "Knows a lot about anime", four: "Quiet and mysterious"},
    {name:"Who is your favorite rapper?", one: "Rap music is juvenile" , two: "YG" , three: "Lil Pump", four: "Kendrick Lamar"},
    {name:"What is your favorite pasttime?", one: "Netflix" , two: "Instagram", three: "Something in real life" , four:"Blazing it"},
    {name:"What is your favorite food?", one: "Flaming hot cheetos" , two: "this question sucks", three:"tacos" , four:"pizza"},
    {name:"What are your religious beliefs?", one:"Western" , two: "Eastern", three:"none", four:"other"}
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
    var 
    for(i=0; i < friends.length; i++){

    }
};

function displaySurveyContent(surveyQuestions, surveyAnswers){

    for (h = 0; h < surveyAnswers.length; h++) {
        var answer = surveyAnswers[h];
        for (e = 0; e < answer.length[e]; e++){
            $('<input type='+' "radio" '+'value =' + e + '/>').appendTo("#survey-questions");
        };
    };


    for (var i = 0; i < surveyQuestions.length; i++) {
        var question = $("<div class='question'/>")
        question.append($("<h2>")).text(questionData[i].name);
        question.append($("<input type='radio' name=" + questionData[i].one + "value=1 >" + questionData[i].one + '</input>'));
        question.append($("<input type='radio' name=" + questionData[i].two + "value=2 >" + questionData[i].two + '</input>'));
        question.append($("<input type='radio' name=" + questionData[i].three + "value=3 >" + questionData[i].three + '</input>'));
        question.append($("<input type='radio' name=" + questionData[i].four + "value=4 >" + questionData[i].four + '</input>'));
    };

    $("#friend-section").append(question)
}
displaySurveyContent();

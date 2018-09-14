// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express setup
var app = express();
var PORT = process.env.PORT || 3000;

// express data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// data for questions to be displayed on survey page

//TODO: must take in data using body-parser




// loop that makes it so friends are generated on each click
// function that grabs results and puts them into an array



// Function to create a new friend


displaySurveyContent(questionData);

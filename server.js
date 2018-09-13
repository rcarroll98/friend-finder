// Dependencies
var express = require("express");
require("body-parser");
require("path");

var friends = {

};

function friend(name, photo, scores){
    this.name = name;
    this.photo = photo;
    this.scores = scores;
};



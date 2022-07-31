
const express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Hello");
})

app.get("/about", function(req, res){
  res.send("<h1> About Ryan </h1> <br> Ryan is a successful, dedicated and amazing person who is happy and happily married and successful in life and finds the perfect person to be his partner in life.")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
} )

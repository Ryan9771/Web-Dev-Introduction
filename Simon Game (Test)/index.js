
var start = false;
var userPattern = [];
var level = 1;
var pattern = [];
var colours = ["green", "blue", "yellow", "red"];


$(document).keydown(function(){
  if (start === false){
    start = true;
    nextPattern();
  }
})

function patternShow(colour){
  var colourFlash = "." + colour;
  $(colourFlash).fadeOut(100).fadeIn(100);
}

function soundPlay(colour){
  var sound = new Audio("sounds/"+colour+".mp3");
  sound.play();
}

// CONLCUSION --> need to put the setTimeout INSIDE a function with all the shit then when inside the loop, just declare the function.

function nextPattern(){
  $("h1").text("level " + level);
  var nextColour = colours[Math.floor(Math.random()*4)];
  pattern.push(nextColour);

  function sequence(i){
    setTimeout(function(){
      $("." + pattern[i]).fadeOut(100).fadeIn(100);
      soundPlay(pattern[i]);
    },500*i)

  }

  for (var i = 0; i < pattern.length; i++){
    sequence(i);
  }

}

function pressShow(colour){
  var pressFlash = "." + colour;
  $(pressFlash).addClass("pressed");
  setTimeout(function(){$(pressFlash).removeClass("pressed")},100);
}

function comparison(length){

  if (userPattern[length] === pattern[length]){
    if (userPattern.length === pattern.length){
      level = level + 1;
      userPattern = [];
      setTimeout(nextPattern,1000);
    }
  } else{
    level = 1;
    pattern = [];
    userPattern = [];
    $("h1").text("Game Over! Press any key to try again.");
    start = false;
  }

}

$(".tiles").click(function(){

  var selectedColour = $(this).attr("id");
  soundPlay(selectedColour);
  pressShow(selectedColour);

  userPattern.push(selectedColour);
  comparison(userPattern.length - 1);


})

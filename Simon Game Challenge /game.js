
var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(
  function(){
    if (!started){
      started = true
      nextSequence();
    }
  }
)

function nextSequence(){

  level = level + 1;
  $("h1").text("level " + level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

// VERY IMPORTANT NOTE!! the setTimeout in loops work by adding a "500"ms delay to EACH value in the array all at once so after the delay they all come at once. To set each array item to be differnt, they need to be multiplied by "i" so that each item has a longer time duration!!
// The "for loop" and the "delay function" is an example of how to produce delayed output successfully.
// So define a function (with an input) with the setTimeout inside it with all the shit inside the setTimeout. Then in the for loop, just simply declare the function taking in an input of the var in the for loop.

  function delay(i){
    setTimeout(function(){
      $("."+ gamePattern[i]).fadeOut(100).fadeIn(100);
      playSound(gamePattern[i]);
    },500*i);
  }
  for (var i = 0; i < gamePattern.length; i++){
      delay(i);
    }

}

function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

function animatePress(currentColour){
  $("." + currentColour).addClass("pressed");
  setTimeout(function(){$("."+currentColour).removeClass("pressed")},100);
}

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){
      userClickedPattern = [];
      setTimeout(function(){nextSequence();},1000);
    }
  } else {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    gamePattern = [];
    userClickedPattern = [];
    started = false;
    level = 0;
    $("h1").text("Oops 😮. Press any key for another try!");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
  }
}



$(".btn").click(
  function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  }
)

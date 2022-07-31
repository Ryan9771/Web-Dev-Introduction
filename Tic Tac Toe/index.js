
// Settling the names

$(".playerName").click(function(){
  $(".dissapear").animate(
    {opacity: 0},100
  )
})


$(".playerName").on("keydown", function(event){
  var object = "." + $(this).attr("id");
  if($(this).text().length === 10 && event.keyCode != 8) {
    event.preventDefault();
  }

  console.log($(this).text());
})


//Game Logic

var counter = 1
var started = false;
var gamePlay = [];

$(".startGame").click(function(){
  if (!started){
    //start game
    started = true;
    console.log(started);

  }
})


$(".resetGame").click(function(){
  if (started === true){
    //reset game
    started = false;
    counter = 1;
    $(".box").text("");
    gamePlay = [];
  }
})



$(".box").click(function(){
  var selected = $(this).attr('id');
  var index = String(selected).slice(-1);
  if (started === true){
    nextMove(selected);
    gamePlay[index-1] = $("." + selected).text();
    checkWin();

  }

})





function nextMove(selected){

  if (counter%2 === 0){
    $("." + selected).text("O");
  } else{
    $("." + selected).text("X");
  }

  counter++;
}


function checkWin(){

  if (gamePlay[0] === gamePlay[1] === gamePlay[2]){
    console.log("win");
  }
  if (gamePlay[3] === gamePlay[4] === gamePlay[5]){
    console.log("win");
  }
  if (gamePlay[6] === gamePlay[7] === gamePlay[8]){
    console.log("win");
  }
  if (gamePlay[0] === gamePlay[3] === gamePlay[6]){
    console.log("win");
  }
  if (gamePlay[1] === gamePlay[4] === gamePlay[7]){
    console.log("win");
  }
  if (gamePlay[2] === gamePlay[5] === gamePlay[8]){
    console.log("win");
  }
  if (gamePlay[0] === gamePlay[4] === gamePlay[8]){
    console.log("win");
  }
  if (gamePlay[2] === gamePlay[4] === gamePlay[6]){
    console.log("win");
  }


}

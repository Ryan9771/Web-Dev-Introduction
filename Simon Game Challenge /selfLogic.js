var pattern = [];
var playerPattern = [];
var level = 1;
var colors = ["green","red","yellow","blue"];
var y = 0;

function colorGenerator(){
  var nextColor = colors[Math.floor(Math.random()*4)];
  pattern.push(nextColor);
  console.log(pattern);
}



$(document).keydown(function game(){

  console.log(y);
  colorGenerator();

  $(".btn").click(function iteration(){

    var target = "." + $(this).attr("id");
    $(target).addClass("pressed");
    setTimeout(function () {
      $(target).removeClass("pressed")
    },100);

    playerPattern.push($(this).attr("id"));
    console.log(playerPattern[y]);
    console.log(pattern[y]);

    if (playerPattern[y] !== pattern[y]){
      alert("Game Over");
    } else{
      y = y + 1;
      console.log(y);

      if (y === level){
        level++;
        playerPattern = [];
        y=0;
        game();

      }
    }



  })

})



/*

*/

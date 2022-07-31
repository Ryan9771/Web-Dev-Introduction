$("h1").click(
  function(){$("h1").css("color", "purple")});

$("input").keydown(function(event){ console.log(event.key)});

$(document).keydown(
  function(event){

    $("h1").text(event.key)}
);

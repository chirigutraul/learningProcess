var randomNumber=0;
const buttonColours=["red","yellow","green","blue"];
var randomChosenColour="";
var userClickedColour="";
const gamePattern=[];
const userClickPattern=[];
var level=0;

function randomizeNumber(x){
  x=Math.floor(Math.random()*4 + 1)-1;
  return x;
}
function nextSequence(){
  randomNumber=randomizeNumber(randomNumber);
  randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
}
$(document).keypress(function(){
  nextSequence();
  $("h1").text("Level" + level);
})

$(".btn").click(function(event){
  userClickedColour=event.target.id;
  userClickPattern.push(userClickedColour);
  nextSequence();
})

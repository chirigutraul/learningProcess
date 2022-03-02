const buttonColours = ["red","blue","green","yellow"];
var randomChosenColour= buttonColours[randomNumber];

function nextSequence(){
  var randomNumber=Math.floor((Math.random() * 4) + 1) - 1;
  console.log(randomNumber);
}
nextSequence();

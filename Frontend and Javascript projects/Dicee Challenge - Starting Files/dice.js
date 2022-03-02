var nrRandom = Math.random()*6;
var nrRandom_2 = Math.random()*6;
var diceNumber_1 = Math.floor(nrRandom) + 1;
var diceNumber_2 = Math.floor(nrRandom_2) +1;


var img1= document.querySelector(".img1");
var img2= document.querySelector(".img2");
var button1=document.querySelector(".btn1");
var button2=document.querySelector(".btn2");
var winner=document.querySelector("h1");
var apasat1=false;
var apasat2=false;


// img1.setAttribute("src",'images/dice'+ diceNumber + '.png');
// img2.setAttribute("src",'images/dice'+ diceNumber_2 +'.png');


button1.onclick = function displayPicture1() {
  img1.setAttribute("src",'images/dice'+ diceNumber_1 + '.png');
  apasat1=true;
    if (apasat2){
      displayWinner();
    }
}
button2.onclick = function displayPicture2() {
  img2.setAttribute("src",'images/dice'+ diceNumber_2 +'.png');
  apasat2=true;
    if (apasat1){
      displayWinner();
    }
}

function displayWinner() {
    if (diceNumber_1 > diceNumber_2) {
      document.querySelector("h1").innerHTML="Player 1 wins!";
    } else if (diceNumber_1 < diceNumber_2){
      document.querySelector("h1").innerHTML="Player 2 wins!";
    } else {
      document.querySelector("h1").innerHTML="It's a Draw!";
    }
}

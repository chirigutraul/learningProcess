
let cuvinteSpanzuratoare=["ZEBRA","CAL","MASEA","PATRUNZATOR","SOARECE","PISICA",
"EXCAVATOR","DROJDIE","MARTURISIRE","SPANZURATOAREA","CASTANE","LAPTOP","CALCULATOR",
"FEREASTRA","RATUSCA","ALFABET","ABECEDAR","TASTATURA","BIROU"];
let cuvant="";
cuvant=$(".cuvant");
cuvant2=$(".cuvant2");
var lungimeCuvant=0;
let cuvantAscuns="";


$(".playButton").click(function(){
  $("h2").text("Completeaza cuvantul ca sa castigi!");
  choseRandomWord();
  lungimeCuvant=cuvantRandom.length;
  hideWord();
  spotCreation();
  cuvant.text("Mai ai "+ lives + " vieti ramase.");
  if(cuvantRandom!=null){
    $(".playButton").click(function(){
      document.location.reload();
    })
  }
})


function hideWord(){
  for(let i=0; i < lungimeCuvant;i++){
    cuvantAscuns=cuvantAscuns+"_ ";
  }
}
var randomNumber=0;
function randomizeNumber(x){
  x=Math.floor(Math.random()*18+1);
  return x;
}

let cuvantRandom="";
function getWord(cuvant){
  cuvant=cuvinteSpanzuratoare[randomNumber];
  return cuvant;
}
function choseRandomWord(){
  randomNumber=randomizeNumber(randomNumber);
  cuvantRandom=getWord(cuvantRandom);
}


var clickedLetter="";
var listaLocuri=document.getElementsByClassName("spot");
$(".letter").click(function(e){
  clickedLetter=e.target.id;
  clickedLetter=clickedLetter.toUpperCase();
  if(!cuvantRandom.includes(clickedLetter)){
    lives--;
    cuvant.text("Mai ai "+ lives + " vieti ramase.");
    if(lives<=0){
      cuvant2.text("Ai pierdut, frate. Cuvantul era "+ cuvantRandom + ".");
    }
  }
  letterCheck();
})
var destinatie=document.getElementById("destinatie");
function spotCreation(){
  for(var nrLocuri=0; nrLocuri < lungimeCuvant; nrLocuri++){
    destinatie.innerHTML += '<div class="spot">__</div>';
  }
}
var litereCorecte=0;
var lives = 5;

function letterCheck(){
  if(cuvantRandom.includes(clickedLetter)){
    for(var i=0;i<lungimeCuvant;i++){
      if (cuvantRandom[i]==clickedLetter){
        listaLocuri[i].innerHTML=clickedLetter;
        litereCorecte+=1;
        if(litereCorecte==lungimeCuvant){
          cuvant2.text("Ai castigat! Felicitari!");
        }
      }
    }
  }
}
// upper functions work

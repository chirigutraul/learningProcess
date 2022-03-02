

function firstStep(){
  setTimeout(function(){
    $(".heartimg").addClass("heartBeat");
    secondStep();
  },500);

}
function secondStep(){
    setTimeout(function(){
      $(".heartimg").removeClass("heartBeat");
      firstStep();
    },500);
  }

$("button").click(function(){
  setTimeout(firstStep(),500);
});

// $("h1").text("No am schimbat textu");
$("h1").click(function(){
  $("h1").css("color","green");
})

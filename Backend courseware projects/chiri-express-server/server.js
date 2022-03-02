const express= require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>we made it </h1>");
});

app.get("/contact", function(req,res){
  res.send("0769763966");
});

app.get("/about", function(req,res){
  res.send("<h1>My name is Raul</h1><br><p>I am a junior web dev</p>");
})
app.get("/hobies",function(req,res){
  res.send("<ul><li>gym</li><li>programming</li>");
})

app.listen(3000, function(){
  console.log("Server ON - port 3000");
});

const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  console.log("Post request received");
  const query=req.body.cityName;
  const apiKey="67aaa9646bad90e3a1f41cec71c1386e";
  const url="https://api.openweathermap.org/data/2.5/find?q="+query+"&appid="+apiKey+"&units=metric";

  https.get(url,function(response){
    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      var temp=weatherData.list[0].main.temp;
      var weatherDescription=weatherData.list[0].weather[0].description;
      const icon=weatherData.list[0].weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>Temperatura in "+query+" este " + temp + " grade Celsius.</h1>");
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<img src="+imageURL+">");
      res.send();
  });
  })
})


app.listen(3000,function(){
  console.log("server ON");
})

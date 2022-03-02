const express=require("express");
const bodyParser=require("body-parser");
const res = require("express/lib/response");

const app=express();


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    console.log(req.body.h1);
})

app.listen(3000, function(){
    console.log("asd");
})

// console.log();

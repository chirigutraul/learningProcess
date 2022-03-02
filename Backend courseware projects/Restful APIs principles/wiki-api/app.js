const mongoose=require('mongoose');
const express=require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


mongoose.connect('mongodb://localhost:27017/wikiDB');


const articleSchema= new mongoose.Schema({
    title:String,
    content:String
})

const Article= mongoose.model("article", articleSchema);


///////////// Requests all articles ////////////
app.route("/articles")
.get(function(req,res){
  Article.find(function(err,foundArticles){
    if(err){
      console.log(err)
    }else {
      res.send(foundArticles);
    }
  })
})
.post(function(req,res){
  
  const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
  });
  
  newArticle.save(function(err){
    if(!err){
      res.send("This post request was a succes!");
    } else {
      res.send(err);
    }
  });
})
.delete(function(req,res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("Succesfully deleted all articles!");
    } else{
      res.send(err);
    }
  })
});
///////////// Requests all articles ////////////


//////////// Requests a single specific article ////////

app.route("/articles/:articleTitle")

.get(function(req,res){
  Article.findOne({title:req.params.articleTitle}, function(err,foundArticle){
    if(err){
      console.log(err);
    } else{
      res.send(foundArticle);
    }
  })
})

.put(function(req,res){
  Article.updateOne(
    {title:req.params.articleTitle},
    {title:req.body.title, content:req.body.content},
    function(err){
      if(!err){
        console.log("updated succesfully.")
      }
    })
})
.patch(function(req,res){
  Article.updateOne(
    {title:req.params.articleTitle},
    {$set : req.body},
    function(err){
      if(!err){
        res.send("succes");
      } else {
        res.send("fail");
      }}
      )
})
.delete(function(req,res){

  Article.deleteOne(
    {title:req.params.articleTitle},
    function(err){
      if(!err){
        res.send("Succesfully deleted the article.");
      } else{
        res.send("The article deletion failed.");
      }
    }
  )

});

//////////// Requests a single specific article ////////


app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
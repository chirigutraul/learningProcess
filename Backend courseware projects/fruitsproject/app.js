const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");
console.log("the connection works");

const fruitSchema= new mongoose.Schema ({
  name:{
    type:String,
    required:[true, "Please enter the fruit name"]
  },
  rating:{
    type:Number,
    min:1,
    max:5
  },
  review:String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit: fruitSchema
});

const Person= mongoose.model("person",personSchema);

const melon= new Fruit({
  name:"melon",
  rating:5,
  review:"yummm!"
}
)

melon.save();

Person.updateOne({name:"John"},{favoriteFruit:melon},function(err){
  if(err){
    console.log(err);
  } else {
    console.log("succes");
  }
})

Person.find(function(err, people){
  if(err){
    console.log(err);
  } 
  else {
    people.forEach(function(person){
      console.log(person);
    });
      }
});


// setTimeout( function () {
//   mongoose.connection.close();
// }, 2000);




// const newPerson = new Person({
//   name:"John",
//   age:37
// })
// newPerson.save();
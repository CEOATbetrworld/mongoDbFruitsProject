const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name:"Mango",
    rating:9,
    review:"King of Fruits"
})

// fruit.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name:"Aman",
    age:19
})

person.save();

//mongoose.connection.close();
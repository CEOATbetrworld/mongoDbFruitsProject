

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017");

mongoose.connection.close();


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

const banana = new Fruit({
    name:"banana",
    rating:9,
    review:"King of Fruits"
})

const kiwi = new Fruit({
    name:"kiwi",
    rating:9,
    review:"King of Fruits"
})

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        console.log(fruits);
    }
    fruits.forEach(function(fruit){
        console.log(fruit.name)
    })
})

// mongoose.connection.close();
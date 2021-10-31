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

// Fruit.insertMany([banana,kiwi],function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Inserted all the fruits to the fruitsDB")
//     }
    
// })


// fruit.save();

Fruit.find(function(err,fruits){
    // if(err){
    //     console.log(err);
    // }
    // else{
    //     console.log(fruits);
    // }
    fruits.forEach(function(fruit){
        console.log(fruit.name)
    })
})



const personSchema = new mongoose.Schema({
    name:String,
    age:Number
})

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name:"Aman",
    age:19
})

// person.save();

//mongoose.connection.close();
// Number Datatype 
let x = 10;
let y = 5;

console.log("Sum:", x + y); 
console.log("Difference:", x - y); 
console.log("Product:", x * y); 
console.log("Quotient:", x / y); 

// String Datatype

let favoriteMovie="Spider-Man";
let message="I love Watching"+favoriteMovie;
console.log(message);


//Booleans Datatype
let isHungry=true;
if (isHungry){
    console.log("Go eat");
}else{
    console.log("You're full!");
}


//Object
let favoriteAnimal={
    name:"Buddy",
    type:"dog",
    age:3,
    isFriendly:true
};
console.log(favoriteAnimal);
console.log("Animal's name is:",favoriteAnimal.name);


//Array 
let colors =["red","blue","yellow","purple","green"]
console.log(colors);
colors.push("pink");
console.log("After adding pink:",colors);
colors.pop();
console.log("After removing the last color:",colors);


//Undefined and Null
let mystery;
console.log("value:",mystery, "Type:", typeof mystery);

mystery=null;
console.log("value:",mystery, "Type:",typeof mystery);


// Big int
let bigNumber=1234567892345678n;
console.log(bigNumber*2n);

// Symbol
let symbol1=Symbol("unique");
let symbol2=Symbol("unique");
console.log(symbol1===symbol2);


// let The Flexible Box
let toy="airoplane";
console.log(toy);
toy ="car";
console.log(toy);

// var the old-school Box
var candyy="Chocolate";
console.log(candyy);

candyy="lollipop";
console.log(candyy);


// difference  let and var
if(true){
    var ball=" Football";
    // let rocket="Badminton";
}
console.log(ball);
// console.log(rocket);


// const the locked box
const pet="Dog";
console.log(pet);


// object and array
const fruits=["Apple","Orange"];
fruits.push("grapes");
console.log(fruits);


// Exercise
// let
let favoriteColor = "blue";
console.log("Original favorite color:", favoriteColor);
favoriteColor = "green";
console.log("Updated favorite color:", favoriteColor);

// var
if (true) {
    var fruit = "apple";
    let vegetable = "carrot";
    console.log("Inside block - fruit:", fruit);
    console.log("Inside block - vegetable:", vegetable); 
}
console.log("Outside block - fruit:", fruit);


// const
const fruitss = ["apple", "banana", "cherry"];
console.log("Original fruits array:", fruitss);
fruitss.push("orange");
console.log("After adding a fruit:", fruitss);


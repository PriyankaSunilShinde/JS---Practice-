// Primitive Data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3
// const isLoggedIn = false;
// let userEmail;

//const outsideTemp = null;
//console.log(typeof outsideTemp); //Output - object

// const id = Symbol("123 ")
// const anotherId = Symbol("123");
// console.log(id == anotherId);

// const bigNumber = 22553223655232n
// console.log(typeof bigNumber);


// Non- Primitive/ Reference Types

// Array, Objects, Functions

// const heros = ["shaktiman", "Naagraj", "Doga"];
// console.log(typeof heros); // output - object


// let myObj = {
//     namr: "Priyanka",
//     age: 33
// }
// console.log(typeof myObj); // output - object


// const myFunction = function(){
//     console.log("Hello World");
// }
// console.log(typeof myFunction); // output - function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

// let myYoutubeName = "PriyankaShindeDotCom";
// let anotherName = myYoutubeName;
// anotherName = "ChaiAurCode";

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email : "pss@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "rnd@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


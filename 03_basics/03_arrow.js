
//this keyword



/*
    1.In browser this prints the window object
    2.In node environment this prints the empty object   
*/
 

const user = {
    username : "Priyanka",
    price : 999,

    WelcomeMessage : function (){
        console.log(`${this.username} , Welcome to our website`); // output - Priyanka , Welcome to our website
        console.log(this); /* output - {
            username: 'Priyanka',
            price: 999,
            WelcomeMessage: [Function: WelcomeMessage]
          }*/
    }
}

user.WelcomeMessage(); 
user.username = "Riyansh";
user.WelcomeMessage();  // output - Riyansh , Welcome to our website
console.log(this); // output - {}


// function chai(){
//     let username = "Rupesh";
//     console.log(this.username);  // output - undefined
// }
// chai();


// const chai = function (){
//     let username = "Rupesh";
//     console.log(this.username);  // output - undefined 
// }
// chai();


// arrow functions

// const chai = () => {
//     let username = "Rupesh";
//     console.log(this.username);  // output - {} 
// }
// chai();


// Explicit return function

const add1 = (num1, num2) => {
    return num1 + num2;
}
console.log(add1(4, 7));

// Implicit return function

const add2 = (num1, num2) => (num1 + num2);
console.log(add2(22, 9));


const displayName = () => ({username : "Sam"});
console.log(displayName());

// const myArray = [1, 2, 3, 4];
// myArray.forEach(function () {});
// myArray.forEach(() => {});
// myArray.forEach(() => ());









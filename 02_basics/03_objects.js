
//object constructors : singleton
Object.create

//object literals

const mySym = Symbol ("key1");

const JsUser = {
    name : "Priyanka",
    "full_name" : "Priyanka Shinde",
    [mySym] : "myKey1",
    age : 33,
    location : "Pune",
    email : "priyanka@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
};

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser[mySym]);

JsUser.email = "priyanka@microsoft.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "priyanka@apple.com";
// console.log(JsUser);


JsUser.greeting1 = function (){
    console.log("Hello JS User"); // Hello JS User
}

JsUser.greeting2 = function (){
    console.log(`Hello JS User, ${this.name}`); // Hello JS User, Priyanka
    // Backticks or String Interpolation 
}


console.log(JsUser.greeting1()); // undefined
console.log(JsUser.greeting1); // [Function (anonymous)]
console.log(JsUser.greeting2()); // undefined







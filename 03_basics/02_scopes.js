

let a = 100;
const b = 200;
var c = 300;


if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(`Inner a :`, a);  // 10
}


// console.log(`Outer a :`, a); // 100
// console.log(`Outer b :`, b); // 200 
// console.log(` c :`, c); // 30 ie.Inner value of c overrides Outer value of c


// +++++++++++++++++++++   New Video Start  +++++++++++++++++++++

function one() {
    const username = "Priyanka";

    function two() {
        const website = "Youtube";
        //console.log(username);   
    }
    //console.log(website); // not in scope
    two();
}
one();


if(true){
    const firstName = "Riyansh";
    if(firstName === "Riyansh"){
        const lastName = " Dudhal";
        //console.log(firstName + lastName);
    }
    // console.log(lastName);  // not in scope 
}
// console.log(firstName);  // not in scope


// ++++++++++++++++ Interesting ++++++++++++++


console.log(addOne(5));
// in this type of function declaration we can initialize function before declaration
function addOne (num) {
    return num + 1;
}

const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(5));
// in this type of function declaration we can not initialize function before declaration it will give reference error







function PrintMyName (){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("A");
}
// PrintMyName();



// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2); // 47
// }
// const result = addTwoNumbers(22,25);
// console.log("Addition : ", result); //Addition :  undefined



function sumTwoNumbers(number1,number2){
    let result = number1 + number2;
    return result;
}
const sum = sumTwoNumbers(22,18);
//console.log("Result : ", sum); // Result :  40



function loginUserMessage (username = "Sam"){
    if(!username){ // here we can use (!username)  also
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());  // undefined just logged in
// console.log(loginUserMessage("Priyanka"));  //Priyanka just logged in


/////////////   New Video Start here   ////////////////////////


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    user_name : "Rupesh",
    price : 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.user_name} and price is ${anyObject.price}`); 
}
handleObject(user);
handleObject({
    user_name : "Riyansh",
    price : 499
});


const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));






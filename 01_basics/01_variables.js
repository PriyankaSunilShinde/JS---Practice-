const accountId = 12345;
let accountEmail = "ps@gmail.com";
var accountPassword = "220192";
accountCity = "Pune";
let accountState;

//accountId = 67890; -- const values can not be changed
accountEmail = "rd@gmail.com";
accountPassword = "090991";
accountCity = "Mumbai";

/*Prefer not to use var because of issue in block scope and function scope*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
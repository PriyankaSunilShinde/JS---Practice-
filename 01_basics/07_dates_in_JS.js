// ++++++++++++   Dates   +++++++++++++++++

// let myDate = new Date();
// console.log(myDate);  // output - 2025-04-04T12:01:21.668Z
// console.log(myDate.toString()); // output - Fri Apr 04 2025 12:02:33 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // output - Fri Apr 04 2025
// console.log(myDate.toLocaleString()); // output - 4/4/2025, 12:06:26 PM
// console.log(typeof myDate); // output - object

// let myCreatedDate = new Date(2025, 0, 22);
// console.log(myCreatedDate.toDateString()); // output - Wed Jan 22 2025

// let myCreatedDateNew = new Date(2025, 0, 22, 5, 3);
// console.log(myCreatedDateNew.toLocaleString());  // output - 1/22/2025, 5:03:00 AM

// let otherDate = new Date("2025-01-22"); // YY-MM-DD ie.year-month-date
// console.log(otherDate.toLocaleString()); // output - 1/22/2025, 12:00:00 AM

// let anotherDate = new Date("01-22-2025"); // MM-DD-YY ie.month-date-year
// console.log(anotherDate.toLocaleString()); // output - 1/22/2025, 12:00:00 AM
// console.log(anotherDate.getTime()); // 

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);
console.log(newDate.toLocaleString("default",{weekday:"long"}));







 












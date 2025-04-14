// object constructors : singleton
// const tinderUser = {};  //Non Singleton object
// console.log(tinderUser); output : {}

const tinderUser = new Object ();  //Singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); 

const regularUser = {
    email : "Someone@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Priyanka",
            lastName : "Shinde"
        }
    }
};

// console.log(regularUser.fullname.userFullName.firstName); // output - Priyanka

const obj1 = { 1 : "a", 2 : "b"};
const obj2 = { 3 : "c", 4 : "d"};
const obj3 = { 5 : "e", 6 : "f"};

// const obj4 = { obj1, obj2, obj3} 
// console.log(obj4); // output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' }, obj3: { '5': 'e', '6': 'f' } }

// const obj5 = Object.assign( obj1, obj2, obj3); 
// //const obj5 = Object.assign( {}, obj1, obj2, obj3);
// console.log(obj5); // output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// const obj6 = {...obj1, ...obj2, ...obj3} // same as adding arrays we can add objects with spread operators
// console.log(obj6); //output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const Users = [
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    },
    {
        id : 1,
        email_address : "ps@gmail.com"
    }    
]

// console.log(Users[1].email_address); //output - ps@gmail.com
// console.log(tinderUser); //output - { id: '123abc', name: 'Sam', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); //output - [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //output - [ '123abc', 'Sam', false ]
// console.log(Object.entries(tinderUser)); //output - [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //output - true
// console.log(tinderUser.hasOwnProperty("isLogin")); //output - false



const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh Choudhary"
};

console.log(course.courseInstructor);// output - Hitesh Choudhary

const {courseInstructor} = course;
console.log(courseInstructor); // output - Hitesh Choudhary

const {courseInstructor: Instructor} = course;
console.log(Instructor); // output - Hitesh Choudhary



// @@@@@@@@@@@@@@@@  React @@@@@@@@@@@@@@@@@@
const navbar = ({company}) => { 
        // here, props.company = company ie.object destructuring is done here
};
navbar(company = "Hitesh")
// @@@@@@@@@@@@@@@@  React @@@@@@@@@@@@@@@@@@




// ############### JSON ####################
// {
//     "name" : "Priyanka",
//     "coursename" : "chai aur code in JS",
//     "price" : "Free"
// }
// ############### JSON ####################




// https://api.github.com/users/hiteshchoudhary   ---> API

// randomuser me api 

//use online json formatter to understand JSON








 









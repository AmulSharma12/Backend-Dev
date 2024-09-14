//=================================== Conditionals - if else-if else
// if(condition) {....}
// else if(condition) {.....}
// else {....}

// let a = 40;
// let b = 40;
// if(a > b)   console.log("a is greater than b");
// else if(a < b)  console.log("a is less than b");
// else console.log("a is equals b");

//=================================== Conditionals - Switch statements
// let x = 1;
// let bulb;
// switch(x){
//     case 0:
//         bulb = "off";
//         console.log(bulb);
//         break;
//     case 1:
//         bulb = "on";
//         console.log(bulb);
//         break;
//     default:
//         bulb = "no value found";
//         console.log(bulb);
//         break;
// }

//=================================== JS - Loops
//------------------------- for loop and nested loop
// for(let ind = 0; ind <= 5; ind++)
// {
//     console.log('--------- outer loop --------------');
//     //nested loop
//     for(let j = 0; j<=3; j++){
//         console.log(ind , j);
//     }
// }

// //while loop   -    while(condition) {....}
// let i = 1;
// while(i<=3){
//     console.log(i);
//     i++;
// }

//=================================== JS - Logical operators
// 1. --> Logical And (&&) - if both true then true otherwise false
// 2. --> Logical OR (||)    if both false then false otherwise true
// 3. --> NOT        (!)     if true then false and vice versa.

//=================================== JS - Arrays
// let score = [];
// let names = [];

// score = [90,20,30,40];
// names = ["Amul","Chirag", "Ankit", "Himanshu"];
// console.log(score);
// console.log(names);
// console.log(names.slice(0,2));
// console.log(names.includes("Amul"));
// console.log(names.join("-"));
// console.log(score.join("-"));
// console.log(names.sort());
// console.log(score.sort());
// console.log(names.reverse());

//=================================== JS - Objects
// const person = {
//   firstName: "Amul",
//   lastName: "Sharma",
//   age: 22,
//   location: ["MP", "JABALPUR"],
//   isAdult: true,
//   10: "Ten",
// };

// console.log(person);
// console.log(typeof person);

// //Accessing items from object using dot operator
// console.log(person.location);

// //Accessing items from object using brackets
// console.log(person["location"]);

// //when we required these
// // console.log(person.10);    //error - Uncaught SyntaxError: missing ) after argument list
// console.log(person["10"]);

// //for adding new properties to the object
// person.classTeacher = "Alex";
// console.log(person.classTeacher);

// //for deleting the properties from the object
// delete person.classTeacher;
// console.log(person.classTeacher);

//=================================== JS - Objects Challenge
// const car = {
//     type: "Maruti",
//     model: "399",
//     color: "white"
// };

// console.log(typeof car);
// car.type = "toyota";
// car.wheels = "4";

// console.log(car);

//=================================== JS - functions
// //creating function without return statement
// function studentDetails() {
//   let studentDetailsList = {
//     firstName: "Amul",
//     LastName: "Sharma",
//     age: 22,
//     classTeacher: "Ruhi",
//     subjects: ["Physics", "Chemistry", "Maths"],
//     isAdult: true,
//     previousClassStatus: {
//       class8: "Passed",
//       class9: "Passed",
//       class10: "Failed",
//     },
//   };

//   console.table(studentDetailsList);
// }

// studentDetails();

// //creating function with return statement
// let sum = add(3, 4);
// console.log(sum);

// function add(x, y) {
//   return x + y;
// }

//=================================== JS - Functions (Challenge)
// function myFunction(value1, value2){
//     return value1 * value2;
// }

// const result = myFunction(3, 3);
// console.log(result);

//=================================== JS - Function Declaration & Function Expression
// // We can declare function in two ways  - function declaration & function Expression
// // we use function keyword to create a function followed by name
// functionDeclaration();

// function functionDeclaration(){
//     console.log("this ways is called as function declaration also can be invoke before/after where it is created");
// }

// functionDeclaration();

// //function expression - By creating function without name assigning it to the variable. You can do it by 2 ways
// //Points need to be remembered
// //1. You must need to assign the function expression to the variable
// //2. You can't invoke before you must need to invoke after the function expression

// //--------------- Function expression 1st way
// // functionExpressionFirstWay("Amul Sharma"); //error - ReferenceError: Cannot access 'functionExpressionFirstWay' before initialization

// let functionExpressionFirstWay = function (firstExpressionWay){
//     console.log(firstExpressionWay);
// }

// functionExpressionFirstWay("Amul Sharma");

// //--------------- Function expression 2nd way - creating function expression using arrow function
// let functionExpressionSecondWay =  (value) => {
//     console.log(value);
// }

// functionExpressionSecondWay("Phil Dunkerley");



//=================================== JS - Callback function
//Passing function as argument to other function that function passed as argument is called as callback function 

//example 1 
function showCallFunc(callBackFn){
    const value = 10;
    callBackFn(value);
}



showCallFunc(function(value){
    console.log(value);
})


//example 2
function greetings(name, cb){
    console.log(`Hi my name is ${name}`);
    cb()
}


function callBackFn(){
    console.log(`this is callback function`);
}

greetings("Amul Sharma", callBackFn);
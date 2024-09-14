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
// //Passing function as argument to other function that function passed as argument is called as callback function

// //example 1
// function showCallFunc(callBackFn){
//     const value = 10;
//     callBackFn(value);
// }

// showCallFunc(function(value){
//     console.log(value);
// })

// //example 2
// function greetings(name, cb){
//     console.log(`Hi my name is ${name}`);
//     cb()
// }

// function callBackFn(){
//     console.log(`this is callback function`);
// }

// greetings("Amul Sharma", callBackFn);

//=================================== JS - Callback function - Challenge
// function showCallFunc(fn){
//     let variable = 10;
//     fn(variable);
// }

// showCallFunc((value) => console.log(value));

//=================================== JS - Scopes
// Scope refers to the current context of code which determines the accessibility of variable in javascript
// There are two types of scope in javascript - global scope and local scope
// Global scope variable are those that are declared outside the block.
// Local scope variable are those that are declared inside the block

// const globalVariable = 10;

// function demo(){
//     const localVariable = 12;
//     console.log(globalVariable);
//     console.log(localVariable);
// }

// demo();
// console.log(globalVariable);
// console.log(localVariable);  //Reference error - not defined in context not in parent contexts

//=================================== JS - Methods
// Function inside the object called as methods
// First way - create a method provide the reference of that method inside the object
// function greet() {
//   return `Hi my name is ${person.name} and my age is ${person.age}`;
// }

// const person = {
//   name: "Amul Sharma",
//   age: 22,
//   greet,
// };

// const result = person.greet();
// console.log(result);

// // Second way - create normally as key: value pair inside the object
// const studentDetails = {
//     name: "Phil Dunkerley",
//     age: 22,
//     greet: function(){
//         return  `Hi my name is ${person.name} and my age is ${person.age}`;
//     }
// }

// const result2 = studentDetails.greet();
// console.log(result2);

//=================================== JS - JSON
//JSON - Javascript Object notation
//As it is human readable and also used for transmitting data between the servers as request or response
//1. property must be double-quoted in json

const person = {
  firstName: "Amul",
  lastName: "Sharma",
  age: 22,
  hobbies: ["Reading", "Writing", "Sports", "Roaming"],
  teachers: {
    maths: "Ankit",
    english: "Pradum",
    sanskrti: "Chirag",
  },
  isAdultFilmWatched: true,
  Sex: "MALE",
};

//converting Javascript object to JSON string
const jsonString = JSON.stringify(person);

//converting JSON string to javascript object
const javascriptObject = JSON.parse(jsonString);

console.log(jsonString);
console.log(javascriptObject);

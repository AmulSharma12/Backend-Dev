//=================================== JS - Template strings/Template literals
// It is one of the way to construct string when variable and expressions involved
// Instead of single and double quotes we use backticks    `` for constructing strings
// Everything inside written will be printed as
// use of dollar followed by curly braces occupied by variable or expression is totally valid javascript
// `...... ${}.........`

// let name = "Amul Sharma";
// let age = 22;
// console.log(`hello my name is ${name} and my age is ${age}`);

//=================================== JS - Template strings challenge
// const firstName = "Tom";
// const secondName = "Jerry";

// const templateString = `The quick
// brown fox
// jumps over
// the lazy dog ${firstName} ${secondName}`;
// console.log(templateString);

//=================================== JS - Arrow function
// const nonParameterisedArrowFunction =  () => console.log("arrow function - non parameterised");
// const parameterisedArrowFunction = (name) => console.log(`parameterised arrow function - my name is ${name}`);
// const newFunction = (name) => {
//     console.log("arrow function");
//     console.log(`my name is ${name}`);
// }

// nonParameterisedArrowFunction();
// parameterisedArrowFunction("Amul Sharma");
// newFunction("Ritik roshan");

//=================================== JS - Arrow Function Challenge
// setTimeout(() => {
//   console.log("function1 invoked");
//   setTimeout(() => {
//     console.log("Function 2 invoked");
//     setTimeout(() => {
//       console.log("Function 3 invoked");
//       setTimeout(() => {
//         console.log("Function 4 invoked");
//         setTimeout(() => {
//           console.log("Function 5 invoked");
//           alert("completed");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//=================================== JS - ES6 - Enhanced Object Literals
//1. --> First enhancment for object if properties and value is same so we can utilise once.
// function user(name, age) {
//   return {
//     // name: name,
//     // age:age
//     name,
//     age,
//   };
// }

// const rohit = user("Rohit Sharma", 34);
// const virat = user("Virat Kohli", 32);

// console.log(rohit);
// console.log(virat);

//2. --> Use of method(function inside object) in enhanced object literal
// function user(name, age) {
//     return {
//       name,
//       age,
//       intro: () =>{
//         console.log(`my name is ${name} and my age is ${age}`)
//       }
//     };
//   }

// const virat = user("Virat kohli", 32);
// console.log(virat.intro());

//=================================== JS - ES6 - Enhanced Object Literals Challenge
// let a = 22;
// let b = 24;
// let c = 45;

// const valueAssign = {
//   a,
//   b,
//   c,
// };

// console.log(valueAssign.a);
// console.log(valueAssign.b);
// console.log(valueAssign.c);

// function hospitalUser () {
//     return {
//         isAuditCordinatorUser: (isAuditCordinatorUserRight) => isAuditCordinatorUserRight,
//         isAnalystUser: (isAnalystUserRight) => isAnalystUserRight,
//     };

// };

// const hospitalUser1 = hospitalUser();
// const auditCordinatorUser = hospitalUser1.isAuditCordinatorUser(true);
// const analystUser = hospitalUser1.isAnalystUser(true);

// console.log(auditCordinatorUser);
// console.log(analystUser);

//=================================== JS - ES6 - Default Function Parameter
//Default function parameter is ES6 feature in which we can provide the default value in parameter
//so that while invoking the function if we dont provide the value it will take the default value
// let library =  () => {
//     return {
//         sum: (a,b = 0) => a + b,
//         multiply: (a,b = 1) => a * b
//     };
// }

// const maths = library();
// console.log(maths.multiply(2,4));
// console.log(maths.sum(5,32));

//=================================== JS - ES6 - Spread operator
// Spread & rest operator uses three period (...)
//Spread - unpack elements  --> [] , {}
// ---> Use cases in array

//1. Clone/Copying - it will clone everything from the updated array
// const outSports = ["Cricket", "FootBall"];
// const copySports = [...outSports];
// console.log(copySports);

// 2. Merge - spread operator use for merging array
// const outDoorSports = ["Cricket", "Football"];
// const inDoorSports = ["Chess", "TableTennis"];
// const sports = [...outDoorSports, ...inDoorSports, "Hockey"];
// console.log(outDoorSports);
// console.log(inDoorSports);
// console.log(sports);

// 3. spread operators in string
// const name = "Amul Sharma";
// const spreadNameArray = [...name];
// const spreadNameObject = { ...name };
// console.log(spreadNameArray);
// console.log(spreadNameObject);

// ---> Use cases in Object

// 1. cloning object using spread operator
// const studentData = {
//   name: "Amul Sharma",
//   age: 23,
//   class: 12,
//   sex: "MALE",
//   isAdult: true,
// };

// const amulData = { ...studentData };
// studentData.score = 89;
// console.log(studentData);
// console.log(amulData);

// 2.  merging object using spread operator
// const personalData = {
//   name: "Amul Sharma",
//   age: 23,
//   class: 12,
//   sex: "MALE",
//   isAdult: true,
// };

// const address = {
//   city: "Mumbai",
//   state: "Maharashtra",
// };

// const personalDetails = { ...personalData, ...address };
// address.postCode = "2343";
// console.log(personalData);
// console.log(address);
// console.log(personalDetails);

// 3. using spread operator shallow copy if nested properties exist - in such case reference being copied
// const patientDetails = {
//   firstName: "Neeraj",
//   LastName: "khanna",
//   Sex: "Male",
//   implantList: ["HipPrimary", "HipRevision", "KneePrimary"],
// };

// patientDetails.eirCode = "XLJLKJF89";
// const demoPatientDetails = {...patientDetails};
// patientDetails.countryCode = "India";
// patientDetails.implantList.push("KneeRevision");

// console.log(patientDetails);
// console.log(demoPatientDetails);

// --> using spread operator while invoking function that will pass as arguments individually.
// function colorPrinting(a, b, c, d,e) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
//   console.log("e",e);
// }

// const colors = ["red", "blue", "green", "yellow"];
// colorPrinting(colors);
// console.log("-----------------");
// colorPrinting(...colors);

//=================================== JS - ES6 - Rest Operator
//Mostly used in functions

//when we dont know the number of parameter is there we can use rest operator ... for packing all the arguments passed in array
// function sum(...numbers) {
//   console.log(numbers);
// }

//by this we can pass any number of arguments
// console.log(sum(2, 3));

//=================================== JS - Destructuring - Array Destructuring
// Desctructuring allow us to make the object or array properties assigned to variable by unpacking it
//Also can pass the default value in the Destructuring.
//In array destructuring order does matter but name doesnt
// const colors = ["Red", "Blue", "Green", "Yellow"];

// const [...allColors] = colors;   //one way is to use spread operator for the colors object each object properties mapped to specific variable in sequence
// const [red, blue, green, yellow = "new"] = colors;
// console.log(red);
// console.log(blue);
// console.log(green);
// console.log(yellow);

//DESTRUCTURING  - destructuring in function
// function studentName() {
//   return ["Amul Sharma", "Chirag Raikwar", "Ankit Patel"];
// }

// let a, b, c;
// [a, b, c] = studentName();
// [x, , z] = studentName(); //you can skip element in array destructuring by empty spaces at that specific parameter
// console.log(a);
// console.log(b);
// console.log(c);

//------------------------------> Challenge - Array Destructuring

// const colorsArr = ["red" , "green", "blue", "yellow", "orange"];
// const [color1,color2,color3] = colorsArr;
// console.log(color1);
// console.log(color2);
// console.log(color3);

//=================================== JS - Destructuring - Object Destructuring
//In Object destructuring as well we do unpack object properties in a variable
//In Object destructuring order does not matter but name does matter.
// const studentDetails = {name:"Amul Sharma", age:23, score:89};
// const {name,score, age} = studentDetails;
// const {name:personName,score:personScore, age:personAge} = studentDetails;

// console.log(name);
// console.log(score);
// console.log(age);

// console.log(personName);
// console.log(personScore);
// console.log(personAge);

//=================================== JS - Destructuring - Function destructuring
// const products ={
//   name:"Snax",
//   items: ["Biscuits","Namkeen"],

// }

// function menuItems({name, items:[item1,item2]}){
//   console.log(`${name}`);
//   console.log(`${item1} ${item2}`)
// }

// menuItems(products);

//=================================== JS - Destructuring - Nested Destructuring
// const patientData = [
//   { patientName: "alex", patientAge: 23, patientProcedure: "HipPrimary" },
//   { patientName: "jeremy", patientAge: 43, patientProcedure: "HipPrimary" },
//   { patientName: "Chris", patientAge: 33, patientProcedure: "KneeRevision" },
//   { patientName: "Rany", patientAge: 25, patientProcedure: "KneePrimary" },
//   { patientName: "Dope", patientAge: 29, patientProcedure: "HipRevision" },
// ];

// const [
//   ,
//   ,
//   { patientName: nameOfPatient, patientProcedure: procedureOfPatient },
// ] = patientData;
// console.log(nameOfPatient, procedureOfPatient);

//=================================== JS - Ternary Operator
//Concise way of writing expression
// const myAge = 13;
// const isAdult = myAge >= 18 ? true : false;
// console.log(isAdult);

//=================================== JS - For in loop
// const arr = [12,23,4,1,41];
// for(let index in arr){
//     console.log(index);
// }

//=================================== JS - For of loop
const arr = [12, 23, 4, 1, 41];
const obj = { name: "Amul", firstName: "Ankit", lastName: "Chirag" };

//for-in loop means iterating over the index (Array) or properties(Object)
// for (let ind in arr) {
//   console.log(ind);
// }

// for (let ind in obj) {
//   console.log(obj[ind]);
// }

//for-of loop means iterating over the values (Array)
// for (let ind of arr) {
//   console.log(ind);
// }

// let name = "Amul Sharma";
// for (let char of name) {
//   console.log(char);
// }

//=================================== JS - For each helper
// const colors = ["red", "blue", "green", "yellow"];
// const colorsObject = {
//   red: "red",
//   blue: "blue",
//   green: "green",
//   yellow: "yellow",
// };

// colors.forEach((color) => console.log(color));
// colors.forEach((color, index, colors) => console.log(color, index, colors));
// colorsObject.forEach((color) => console.log(color));  //error

//=================================== JS - Higher order function
//The function which (takes function as argument) or (returns a function as its output) called as
//Higher order functions.

// function x() {
//   console.log("Callback function");
// }

// function y(x) {
//   x();
// }

//when higher order function need to be used lets say you have array and you have to calculate area, circumfrence, diameter
// const radius = [1, 2, 3, 4];

// const calculateArea = (radius) => {
//   const output = [];
//   radius.forEach((radius) => output.push(Math.PI * radius * radius));
//   return output;
// };

// console.log(calculateArea(radius));

//if you have to calculate circumference & diameter
// const calculateCircumference = (radius) => {
//   const output = [];
//   radius.forEach((radius) => output.push(2 * Math.PI * radius));
//   return output;
// };

// console.log(calculateCircumference(radius));

// const calculateDiameter = (radius) => {
//   const output = [];
//   radius.forEach((radius) => output.push(2 * radius));
//   return output;
// };

// console.log(calculateDiameter(radius));

// But still there is better way we can write this only logic is changed most of the part is almost the same

//logic for calculating area
// const area = (radius) => Math.PI * radius * radius;
// const circumference = (radius) => 2 * Math.PI * radius;
// const diameter = (radius) => 2 * radius;

// //radius is my array and logic function we will pass
// const calculate = (inputArr, logic) => {
//   let output = [];
//   inputArr.forEach((element) => output.push(logic(element)));
//   return output;
// };

// const radiusOutput = calculate(radius, area);
// const circumferenceOutput = calculate(radius, circumference);
// const diameterOutput = calculate(radius, diameter);

// console.log(radiusOutput);
// console.log(circumferenceOutput);
// console.log(diameterOutput);

//=================================== JS - Map
// Map is also higher order function that map through each and every values through out the array
// and used to transform the array by creating new array and returning output.
// const inputArr = [1, 2, 3, 4, 5];

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x > 4;
// }

// const output1 = inputArr.map(double);
// const output2 = inputArr.map(triple);
// const output3 = inputArr.map((x) => x.toString(2));
// console.log(output1);
// console.log(output2);
// console.log(output3);

//=================================== JS - Filter
// Array filter method js is also higher order function that map through each and every value
// and filter the values out of the array.
// const inputArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// function isEven(x) {
//   return x % 2 === 0;
// }
// function isOdd(x) {
//   return x % 2 !== 0;
// }

// const oddNumbers = inputArr.filter(isOdd);
// const evenNumbers = inputArr.filter(isEven);
// const filterPrime = inputArr.filter((x) => {
//   let factor = 0;

//   for (let i = 1; i <= x; i++) {
//     if (x % i === 0) factor++;
//   }

//   return factor === 2;
// });

// console.log(filterPrime);

//=================================== JS - Reduce
// Reduce is also used as higher order function that takes 2 arguments
// 1. acc - accumulator that represent the value that we are calculating.
// 2. value - represents the value when we iterate through the array.

// for e.g. - calculating sum or Max in array

//example 1 - sum of the array using simple method & using reduce method for the map
// const inputArr = [12, 3, 34, 12, 42, 199];

// function sumOfArray(inputArr) {
//   let result = 0;
//   for (let ind = 0; ind < inputArr.length; ind++) {
//     result += inputArr[ind];
//   }

//   return result;
// }

// console.log(sumOfArray(inputArr));

// // using reduce method
// const sumOfArrayResult = inputArr.reduce((result, value) => {
//   result += value;
//   return result;
// });

// console.log(sumOfArrayResult);

//-----Example 2 - finding the max of element in the array.
// const inputArr = [1, 2, 3, 45, 6342, 2353];

// //calculating max using the normal method
// function calculateMax(nums) {
//   if (nums.length == 0) return -1;
//   let maxNumber = -1;
//   for (let ind = 0; ind < nums.length; ind++) {
//     if (nums[ind] > maxNumber) maxNumber = nums[ind];
//   }

//   return maxNumber;
// }

// console.log(calculateMax(inputArr));

// //calculating using the reduce method
// const maxNumberUsingReduce = inputArr.reduce((acc, value) => {
//   debugger;
//   if (value > acc) acc = value;
//   return acc;
// });

// console.log(maxNumberUsingReduce);

//=================================== JS - Practice map/filter/reduce
// const user = [
//   { firstName: "Amul", lastName: "Sharma", age: 23 },
//   { firstName: "Chirag", lastName: "Raikwar", age: 24 },
//   { firstName: "Ankit", lastName: "Patel", age: 25 },
//   { firstName: "Risabh", lastName: "Pant", age: 30 },
//   { firstName: "Neeraj", lastName: "Burla", age: 30 },
// ];

// //filter out the full name from the user array - use of map
// const fullNameList = user.map((x) => x.firstName + " " + x.lastName);
// console.log(fullNameList);

// //filter out the user with age > 23 - use of age
// const userWithAgeGreater30 = user.filter((x) => x.age > 23);
// console.log(userWithAgeGreater30);

//=================================== JS - Array - every and some method
// const user = [
//   { firstName: "Amul", lastName: "Sharma", age: 23 },
//   { firstName: "Chirag", lastName: "Raikwar", age: 24 },
//   { firstName: "Ankit", lastName: "Patel", age: 25 },
//   { firstName: "Risabh", lastName: "Pant", age: 30 },
//   { firstName: "Neeraj", lastName: "Burla", age: 30 },
// ];

// console.log(user);
// const everyResp = user.every((person) => person.age < 18);
// console.log(everyResp);

// const someResp = user.some((person) => person.age > 25);
// console.log(someResp)

//=================================== JS - Map data structure
// Map is Built-in data structure introduced in ES6 that allow you to store data in key:value pairs
// Just like objects but in objects we can store key for type limited to string and symbol
// But here in map allow you to store any type of key:value pairs

//how to create a map - Prototype map
// const map = new Map();

//printing the empty map
// console.log(map);

// //defining keys for the map
// const key1 = "stringType";
// const key2 = {};
// const key3 = function () {};

// //printing the map size
// console.log(map.size);

// //setting the map
// map.set(key1, "key1 value");
// map.set(key2, "key2 value");
// map.set(key3, "key3 value");

// //printing the map size
// console.log(map);
// console.log(map.size);
// console.log(map.keys()); //for listing all the keys in the map Prototype - MapIterator
// console.log(map.values()); //for listing all the values in the map Prototype - MapIterator

// console.log("---------------Looping for key value pair both");
// //now looping part of map
// for (let [key, value] of map) {
//   console.log(`${key} - ${value}`);
// }

// console.log("--------------Looping for only the keys");
// //for now looping only for the keys
// for (let key of map.keys()) {
//   console.log(key);
// }

// console.log("-------------Looping for only the values");
// //for now looping only for the values
// for (let value of map.values()) {
//   console.log(value);
// }

//=================================== JS - Map Excercise
// const map = new Map();

// const key1 = "a";
// const key2 = "b";
// const key3 = "c";

// map.set(key1, 1);
// map.set(key2, 2);
// map.set(key3, 3);

// console.log(map.get(key1));
// console.log(map.size);

// map.delete(key3);
// console.log(map.size);

//=================================== JS - Set
// Set is built-in data structure introduced in ES6
// that allows us to store the unique values in the set data strcuture

// //One way
// const initialValues = [12, 12, 14, 15];

// //using constructor creating set
// const set = new Set(initialValues);
// console.log(set);
// console.log(set.size);

// //Creating new Set
// const mySet = new Set();

// //Adding value to the set
// mySet.add(12);
// mySet.add("Amul");
// mySet.add("Amul");
// mySet.add("Sharma");
// mySet.add(4);

// console.log(mySet);
// console.log(mySet.size);

// //deleting the value from the set
// mySet.delete("Sharma");
// console.log(mySet);
// console.log(mySet.size);

// //Looping over the set
// for (let element of mySet) {
//   console.log(typeof element + " " + element);
// }

//=================================== JS - Set Practice
// const letters = new Set();

// letters.add("a");
// letters.add("b");
// letters.add("c");

// console.log(letters);

//=================================== JS - Symbol
//Symbol is a unique & immutable(value cannot be changed) primitive data type introduced in ES6 .A symbol is often used for object properties to avoid naming conflicts.

//When you create a symbol it should be unique and cannot be recreated or regenerated

// const symbol1 = Symbol("name");
// const symbol2 = Symbol("name");
// console.log(symbol1 == symbol2);
// console.log(symbol1 === symbol2);

// const student = {};
// student.age = 23;
// student[symbol1] = "Symbol 1";
// student[symbol2] = "Symbol 2";
// student["class"] = "Upper level";

// console.log(student);
// console.log(student.age);
// console.log(student.symbol1);
// console.log(student.symbol2);
// console.log(student.class);

//=================================== JS - Symbol Practice
const mySymbol = Symbol("foo");
console.log(typeof mySymbol);

const object = {};
object[mySymbol] = "custom symbol value 1";
console.log(mySymbol);
console.log(object.mySymbol);

for (let element in object) {
  console.log(element);
}

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
const myAge = 13;
const isAdult = myAge >= 18 ? true : false;
console.log(isAdult);

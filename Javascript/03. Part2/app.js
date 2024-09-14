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
let library =  () => {
    return {
        sum: (a,b = 0) => a + b,
        multiply: (a,b = 1) => a * b
    };
}

const maths = library();
console.log(maths.multiply(2,4));
console.log(maths.sum(5,32));
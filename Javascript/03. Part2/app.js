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
setTimeout(() => {
  console.log("function1 invoked");
  setTimeout(() => {
    console.log("Function 2 invoked");
    setTimeout(() => {
      console.log("Function 3 invoked");
      setTimeout(() => {
        console.log("Function 4 invoked");
        setTimeout(() => {
          console.log("Function 5 invoked");
          alert("completed");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

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
const firstName = "Tom";
const secondName = "Jerry";

const templateString = `The quick
brown fox 
jumps over
the lazy dog ${firstName} ${secondName}`;
console.log(templateString);

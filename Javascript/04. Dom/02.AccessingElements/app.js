// Dom element accessing using javascript
// console.log(document);

// 1 getElementsByClassName
// Accessing HTML element using tag name - Prototype - HTMLCollection
const h1Element = document.getElementsByTagName("h1");
console.log(h1Element);

// 2 getElementsByClassName
// using the class name - Prototype - HTML Collection
const h1ElementWithClassName = document.getElementsByClassName("text-color");
console.log(h1ElementWithClassName);

// 3 getElementById
//using the Tag name - give the element
const h1ElementWithTagName = document.getElementById("uniqueElement");
console.log(h1ElementWithTagName);

//4. querySelector
// gives only the very first element when the multiple element exists usage of css selectors
const h1 = document.querySelector("h1");
const h1WithClass = document.querySelector(".text-color");
const h1WithId = document.querySelector("#uniqueElement");

console.log(h1);
console.log(h1WithClass);
console.log(h1WithId);

//5. querySelectorAll
// Prototype - NodeList - provides the list of all the elements with the help of css selectors
const h1New = document.querySelectorAll("h1");
const h1NewWithClass = document.querySelectorAll(".text-color");
const h1NewWithId = document.querySelectorAll("#uniqueElement");

console.log(h1New);
console.log(h1NewWithClass);
console.log(h1NewWithId);

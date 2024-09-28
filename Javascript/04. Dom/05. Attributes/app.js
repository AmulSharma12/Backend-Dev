//href
//value
//type
//getAttribute(attrName)
//setAttribute(attrName,value)

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const a = document.querySelector("a");

console.log(input);

//setting the attributes
// a.href = "https://www.facebook.com/amul.sharma.94849";
// input.type = "password";
// input.placeholder = "Please fill the password";

//getting the attributes
// console.log(a.href);
// console.log(input.type);
// console.log(input.placeholder);

// setAttributes(attrName,value)
// getAttributes(attrName)

// using setAttributes for setting the attributes for the element

a.setAttribute("href", "https://instagram.com/amul_op____");
input.setAttribute("type", "password");
input.setAttribute("placeholder", "Please fill the password");
// input .setAttribute("type", "text");

//using getAttributes for getting the attributes
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));
console.log(a.getAttribute("href"));

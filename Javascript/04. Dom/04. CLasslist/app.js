//classList.add("");
//classList.remove("");
//classList.toggle("");

//Accessing that h1 element for manipulating classes
const h1 = document.querySelector("h1");

//provides the list of class for that specific element
console.log("Initial class ", h1.classList);

//adding class to the element - Prototype - DOMTokenList
h1.classList.add("apply-styles");
console.log(h1.classList);

//removing class to the element - Prototype - DOMTokenList
h1.classList.remove("apply-styles");
console.log(h1.classList);

//toggling class to the element - Prototype - DOMTokenList
h1.classList.toggle("apply-styles");
console.log(h1.classList);

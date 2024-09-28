//innerText
//textContent
//innerHTML

const h1 = document.querySelector(".innerText");
console.log(h1);

//innerText
//gives the innerText for that specific element
console.log(h1.innerText);
h1.innerText = "innerText updated to My hellow world";
console.log(h1.innerText);

// textContent
//gives the textContent - excluding the HTML elements
const div = document.querySelector("div");
console.log(div.textContent);
div.textContent = "text Content updated";
console.log(div.textContent);

//innerHTML
//gives everything inside the element also the HTML elements
const demo = document.querySelector(".demo");
console.log(demo.innerHTML);
demo.innerHTML = "<h1> Updated heading</h1>";
console.log(demo.innerHTML);

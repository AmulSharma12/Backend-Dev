// console.log("log is used for printing");
// console.clear();
// console.table({ name: "Amul Sharma", age: 20 });
// console.log("object printed");

// Single line comment

/*
Multi 
line 
comment
*/

//================================= Variables - challenge
let name = "Amul Sharma";
let whatDoYouWannaBecomeInYourLife = "Programmer";
const gender = "MALE";
let instagramHandle = "https://instagram.com/amul_op____";

// console.log(name);
// console.log(whatDoYouWannaBecomeInYourLife);
// console.log(gender);
// console.log(instagramHandle);

//================================ Primtives Types
//Number type
let num = 10;
// console.log(num + num);
// console.log(num - num);
// console.log(num * num);
// console.log(num / num);
// console.log(num % num);
// console.log(num ** num);  //power of number
// console.log(num++);
// console.log(num--);

//Boolean type
// let isTrue = true;
// console.log(isTrue);

//NaN  type
let number = 78;
// console.log(number + undefined);

/*

Falsy and truthy value
1. False
2. null
3. undefined
4. '', "", `` (empty quotes)
5. 0 
6. -0
7. NaN

*/

//================================ Compairison operators
//-------------- Relational Operators ------------------

// console.log(10 > 10); //false
// console.log(10 < 10); //false
// console.log(10 <= 10); //true
// console.log(10 >= 10); //true
//--------------------------------

//---------------- Equality operators ----------------

//  ====  -> strict equality operator (type + value)
//  !==   -> strict not equality operator (type + value)
//  ==    -> loose eqaulity operator (value check)
//  !=    -> not equality operator (value check)

// console.log(10 === 10);     //true
// console.log(10 !== 10);     //false
// console.log(10 == 10);      //true
// console.log(10 != 10);      //false
//--------------------------------

//================================ String in javascript
let firstName = "  Amul         ";
let secondName = `Shxrma`;

// 1. concatenation
const fullName = firstName.concat(secondName);
// console.log(fullName);

// 2. Append something
// firstName += "something added"
// console.log(firstName);

// 3. length
// console.log(firstName.length);

// 4. Cases
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// 5. Slice
// console.log(firstName.slice(0, 3));

// 6. split and join
// console.log(firstName.split(""));
// console.log(firstName.split("").join("-"));
// console.log(firstName.split("u"));
// console.log(firstName.split("u").join("-"));

// 7. includes
// console.log(firstName.includes("u"));

// 8. Trim method
// console.log(firstName);
// console.log(firstName.trim());

// 9. Bacticks
const myAge = 23;
const fullNameWithAge = `My full name is ${firstName.trim()} ${secondName.trim()} and my age is ${myAge}`;
// console.log(fullNameWithAge);



//================================ Type conversion
let money = "30";

//--------------------- 1. convert string to number
// money = parseInt(money);
// money =+money;
money = Number(money);
console.log(typeof money);

//--------------------- 2.  convert number to string
let val = 45;

// val = val.toString();
// val = String(val);

console.log(val);
console.log(typeof val);


//--------------------- 3. convert string to decimal
let decimalString = "29.2";
let decimalValue = parseFloat(decimalString);
console.log(decimalValue);
console.log(typeof decimalValue);

 
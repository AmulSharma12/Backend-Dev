//=================================== Conditionals - if else-if else
// if(condition) {....}
// else if(condition) {.....}
// else {....}


// let a = 40;
// let b = 40;
// if(a > b)   console.log("a is greater than b");
// else if(a < b)  console.log("a is less than b");
// else console.log("a is equals b");



//=================================== Conditionals - Switch statements
// let x = 1;
// let bulb;
// switch(x){
//     case 0: 
//         bulb = "off";
//         console.log(bulb);
//         break;
//     case 1:
//         bulb = "on";
//         console.log(bulb);
//         break;
//     default:
//         bulb = "no value found";
//         console.log(bulb);
//         break;
// }


//=================================== JS - Loops
//------------------------- for loop and nested loop
// for(let ind = 0; ind <= 5; ind++)
// {
//     console.log('--------- outer loop --------------');
//     //nested loop
//     for(let j = 0; j<=3; j++){
//         console.log(ind , j);
//     }
// }


// //while loop   -    while(condition) {....}
// let i = 1;
// while(i<=3){
//     console.log(i);
//     i++;
// }



//=================================== JS - Logical operators
// 1. --> Logical And (&&) - if both true then true otherwise false
// 2. --> Logical OR (||)    if both false then false otherwise true
// 3. --> NOT        (!)     if true then false and vice versa.


//=================================== JS - Arrays
let score = [];
let names = [];

score = [90,20,30,40];
names = ["Amul","Chirag", "Ankit", "Himanshu"];
console.log(score);
console.log(names);
console.log(names.slice(0,2));
console.log(names.includes("Amul"));
console.log(names.join("-"));
console.log(score.join("-"));
console.log(names.sort());
console.log(score.sort());
console.log(names.reverse());
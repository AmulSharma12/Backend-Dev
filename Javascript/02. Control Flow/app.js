//=================================== Conditionals - if else-if else
// if(condition) {....}
// else if(condition) {.....}
// else {....}


let a = 40;
let b = 40;
if(a > b)   console.log("a is greater than b");
else if(a < b)  console.log("a is less than b");
else console.log("a is equals b");



//=================================== Conditionals - Switch statements
let x = 1;
let bulb;
switch(x){
    case 0: 
        bulb = "off";
        console.log(bulb);
        break;
    case 1:
        bulb = "on";
        console.log(bulb);
        break;
    default:
        bulb = "no value found";
        console.log(bulb);
        break;
}


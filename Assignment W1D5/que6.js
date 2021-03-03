/*`7. Write a function compute, that takes three parameters. First parameter is a call back function
that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first)`*/

// function compute(add,x,y){
//   return add(x,y);

// }

// function add(x,y){
//   return x+y
// }
// console.log(compute(add,6,3));



// console.log("***************** function expression /anonymous function**********************")

// let compute=function(add,x,y){
  
//   return add(x,y);

// }

// let add=function(x,y){
//   return x+y
// }

// console.log(compute(add,6,3));
console.log("***************** Arrow function **********************")
let compute=(add,x,y)=>add(x,y);
let add=(x,y)=>x+y;
console.log(compute(add,6,3));
 
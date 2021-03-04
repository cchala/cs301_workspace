/*`7. Write a function compute, that takes three parameters. First parameter is a call back function
that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first)`*/
"use strict";
/**
 * 
 * @param {function} add is a function that add two numbers; 
 * @param {number} number1 is a number input; 
 * @param {number} number2 is a number input;
 * @return {function}; 
 */
function compute(add,number1,number2){
  return add(number1,number2);

}
/**
 * 
 * @param {number} number1 is a number input; 
 * @param {number} number2 is a number input;
 * @return {number}; 
 */
function add(number1,number2){
  return number1+number2;
}
//console.log(compute(add,6,3));
// console.log("***************** function expression /anonymous function**********************");
// /**
//  * 
//  * @param {function} add1;
//  * @param {number} number1; 
//  * @param {number} number2;
//  * @return {function}; 
//  */
// let compute1=function(add1,number1,number2){
  
//   return add1(number1,number2);

// };
// /**
//  * 
//  * @param {number} number1; 
//  * @param {number} number2;
//  * @return {number};
//  */
// let add1=function(number1,number2){
//   return number1+number2;
// };
// console.log(compute1(add1,6,3));
// console.log("***************** Arrow function **********************");
// /**
//  * 
//  * @param {function} add; 
//  * @param {number} number1;
//  * @param {number} number2;
//  * @return {number}; 
//  */
// let compute3=(add,number1,number2)=>add(number1,number2);
// let add3=(number1,number2)=>number1+number2;
// console.log(compute3(add3,6,3));

module.exports = {compute,add,};
 
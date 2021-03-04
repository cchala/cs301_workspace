/*`5. Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM.`*/
//Short cut to find GCF
"use strict";
//let prompt=require("prompt-sync")();
/**
 * 
 * @param {number} num1 is input;
 * @param {number} num2 is input; 
 * @return {number};
 */
let getNewGCF= function(num1,num2){
  if(num1<num2){
    let temp=num1;
    num1=num2;
    num2=temp;
  }
  do{
    let rimnder=num1%num2;
    num1=num2;
    num2=rimnder;
  }while(num2!==0);
  return num1;
};
//console.log(getNewGCF(3,4))
/**
 * 
 * @param {number} num1; 
 * @param {number} num2;
 * @return {number}; 
 */
function getLCM(num1,num2){
  let product=num1*num2;
  let gcfOfTwo=getNewGCF(num1,num2);
  return product/gcfOfTwo;
}
//console.log(getLCM(3,4))
// let num1=parseInt(prompt("Please enter your number here"));
// let num2=parseInt(prompt("Please enter your number here"));
//let gcfOfTwoNumber=getNewGCF(num1,num2);
//let lcmOfTwoNumbers=getLCM(num1,num2);
//console.log("The greatest common factor is: $"+(gcfOfTwoNumber)+" and the least common multple is :$"+(lcmOfTwoNumbers));

module.exports = {getLCM};

//`4. Write a function to compute HCF of two numbers. Write it as a function expression`
////////function declearation
"use strict";
/**
 * 
 * @param {number} num1; 
 * @param {number} num2;
 * @return {number};
 */
function getGHF1(num1,num2){
  let min=Math.min(num1, num2);
  let gcf=1;
  for(let i=2;i<=min;i++){
     if(num1%i===0 && num2%i===0){
       gcf=i;
     }
  }
  return gcf;
}
console.log(getGHF1(12,24));
////Short cut to find GCF
/**
 * 
 * @param {number} number1; 
 * @param {number} number2;
 * @return {number}; 
 */
function getNewGCF(number1,number2){
  if(number1<number2){
    let temp=number1;
    number1=number2;
    number2=temp;
  }
  do{
    let rimnder=number1%number2;
    number1=number2;
    number2=rimnder;
  }while(number2!==0);
  return number1;
}
console.log(getNewGCF(98,56));

module.exports = {getNewGCF};


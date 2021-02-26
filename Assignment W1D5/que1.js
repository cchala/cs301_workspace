`1. Write a function named checkPrime that accepts a parameter and returns true if the argument
is a prime number otherwise returns false.
a. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not.`
//Q1
let prompt=require("prompt-sync")();
function checkPrime(num){
  let isPrime=true;
  for(let i=2;i<num;i++){
    if(num%i===0){
      isPrime=false;
      break;
    }
  }
  return isPrime;
}
//console.log(checkPrime(8))
let numberP=+prompt(`Please enter the number here`)
let result=checkPrime(numberP);
console.log(result)
`1. A prime number (or a prime) is a natural number greater than 1 that is not a product of two
smaller natural numbers. In other words, it is a number that is only perfectly divisible by number
1 and itself. Write a JavaScript program to test weather user input is a prime number or not.
a. Your logic should be based on factor count. i.e., prime number will have 0 factors (not
counting 1 and itself), while composite will have 1 or more factors.
b. This time think of a logic to use break statement so that you can break early from the
loop, right when you know number is not prime. For example, you know number 8 is not
prime right on the first loop because it is perfectly divisible by 2 itself, that's why`
//Q.1
//a. using counting
let prompt=require('prompt-sync')();
let primeNum=+prompt('Please enter any number to check prime or not');
let count=0;
for(let i=2; i<primeNum;i++){
  if(primeNum%i===0){
    count++;
  }
}
if(count===0){
  console.log(`${primeNum} is prime number`)
}else{
  console.log(`${primeNum} is not prime number`)
}
//b. using break
for(let i=2; i<primeNum;i++){
  if(primeNum%i===0){
    console.log(`${primeNum} is not prime`)
    break;
  }else{
    console.log(`${primeNum} is prime`)
    break;
  }
}
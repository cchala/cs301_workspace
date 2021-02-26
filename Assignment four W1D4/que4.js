`4. Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input.
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …`
//Q.4
let prompt=require('prompt-sync')();
let n=prompt("enter the number of fib.")
let i=0;
let j=1;
let count=1;
let result="";
result=result+ i +","+ j+",";
while(count<n){
    let nextNumber= i+j;
    result=result+nextNumber+",";
    i=j
    j=nextNumber;
    count++;
}
console.log(`The result will be :${result}`);
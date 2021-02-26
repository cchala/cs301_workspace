`2. Write a Java program to calculate the factorial value of a given number. E.g., factorial 4 =
4*3*2*1 = 24`
//Q.2
let prompt=require('prompt-sync')();
let factorialNum=+prompt(`Please enter number here :`)
let product=1;
for(let i=factorialNum;i>=1;i--){
    product*=i;
}
console.log(`The product of a given number :${product}`);
`5. Write a JavaScript program to compute sum of all the digits in a given integer number.
Input= Output
123 =6
102= 3`
//Q.5
let prompt=require('prompt-sync')();
let value=prompt("Enter a digit here")
let sum=0
for(let j=0;j<value.length;j++){
  sum+=parseInt(value[j]) 
}
 console.log("The output is :"+ sum)
 /////or
let input=+prompt('enter the number: ');
let sum1=0;
while(input>9){
 sum1+=input%10;
 input=parseInt(input/10) ;
}
sum1+=input;
console.log("the sum of digit is :"+sum1);

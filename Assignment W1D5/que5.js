/*`5. Write a function to find LCM of any two numbers using the HCF function from previous
question. Write it as a function expression.
a. Now write a program that asks two numbers from the user and displays HCF and LCM of
the two numbers.
Hint: search for relation between HCF and LCM.`*/
//Short cut to find GCF
let prompt=require("prompt-sync")();
let getNewGCF= function(a,b){
  if(a<b){
    let temp=a;
    a=b;
    b=temp;
  }
  do{
    let r=a%b;
    a=b;
    b=r
  }while(b!==0)
  return a;
}
//console.log(getNewGCF(3,4))

function getLCM(num1,num2){
  let product=num1*num2;
  let gcfOfTwo=getNewGCF(num1,num2);
  return product/gcfOfTwo;
}
//console.log(getLCM(3,4))
let num1=parseInt(prompt("Please enter your number here"))
let num2=parseInt(prompt("Please enter your number here"))
let gcfOfTwoNumber=getNewGCF(num1,num2);
let lcmOfTwoNumbers=getLCM(num1,num2)
console.log(`The greatest common factor is: ${gcfOfTwoNumber} and the least common multple is :${lcmOfTwoNumbers}`)

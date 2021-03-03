
//`4. Write a function to compute HCF of two numbers. Write it as a function expression`
////////function declearation
function getGHF1(num1,num2){
  let min=Math.min(num1, num2)
  let gcf=1;
  for(let i=2;i<=min;i++){
     if(num1%i===0 && num2%i===0){
       gcf=i
     }
  }
  return gcf;
}
console.log(getGHF1(12,24))
////Short cut to find GCF
function getNewGCF(a,b){
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
console.log(getNewGCF(98,56))


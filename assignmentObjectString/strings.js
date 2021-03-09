"use strict";
let car={};
car.make="Toyota";
car.model="Camry";
console.log(car.make);
console.log(car["make"]);
for(let key in car){
    console.log(key);
    console.log(car[key]);

}
console.log(car);
car.model="RAV4";
console.log(car.model);
delete car.make;
for(let key in car){
    console.log(car[key]);
}
/**
 * 
 * @param {object} obj;
 * @return {number}; 
 */
function countProperties(obj){
    let count=0;
  for(let key in obj){
      if(key in obj){
          count++;
      }
      
  }
  return count; 
}

// let myObje={name:"chimdi",
// age:28,
// job:"Teacher",
// gender:"M"};
// console.log(countProperties(myObje));
/**
 * 
 * @param {string} str;
 * @return {boolean};
 */
function checkSpam(str){
    let strg1="lottery";
    let strg2="prize";
    if(str.includes(strg1)||str.includes(strg2)){
        return true;
    }else{
        return false;
    }
}

console.log(checkSpam("the chance to win lottery is high"));
/**
 * 
 * @param {string} strg1; 
 * @param {string} strg2;
 * @return {string}; 
 */
function suffix(strg1,strg2){
    let index=0;
    let count=0;
    let ln2= strg2.length-1;
    for(let i=strg1.length-1;i>=0;i--){
        if(strg1[i]===strg2[ln2-count]){
            index++;
            count++;
            continue;
        }
        break;
    }
    let charStart=strg1.length-index;
    let result=strg1.slice(charStart,strg1.length);
    return result;
}

console.log(suffix("chikk","learnikk"));
/**
 * 
 * @param {string} sss;
 * @return {string};
 */
function titleCase(sss){
    let firstChar=sss.slice(0,1);
    let afterFirstChar=sss.slice(1);
    let toUpperFirstChar=firstChar.toUpperCase();
    let result=toUpperFirstChar.concat( afterFirstChar);
    return result;
 
}

// console.log(tittleCase("chimdi"));
/**
 * 
 * @param {number} num1;
 * @param {number} num2;
 * @return {number}; 
 */
function swap(num1,num2){
    let temp=num1;
    num1=num2;
    num2=temp;
   console.log(num1,num2);
}
console.log(swap(5,4));

/**
 * 
 * @param {array} users;
 * @return {number};
 */
function getAverageAge(users){

    let sum=0;
    for(let i=0;i<users.length;i++){
         sum+=users[i].age;
    }
    return sum/users.length;
}

let object1={name:"Abc",
age:20};
let object2={name:"xyz",
age:10};
let users=[];
users[0]=object1;
users[1]=object2;

console.log(getAverageAge(users));
module.exports={countProperties,checkSpam,commonSuffix: suffix,tittleCase: titleCase,swap,getAverageAge};

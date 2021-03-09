"use strict";
/**
 * 
 * @param {number} num take digit number as input;
 * @return {number}; 
 */
function countDigits(num){
  
    if(num===0){
      return 0;
    }else{
      return 1 + countDigits(parseInt(num/10));
    }
  }
  
  console.log(countDigits(1234666));
/**
 * 
 * @param {string} strg takes string as input;
 * @return {string}; 
 */
  function reverse(strg){
    let result="";
    if(strg===""){
      return "";
    }else{
         result+=strg.substring(strg.length-1); 
         return result+ reverse(strg.substring(0,strg.length-1));
    }
  }
  let strgs="chimdi";
  console.log(reverse(strgs));
/**
 * 
 * @param {number} num number as input; 
 * @param {number} numP this the number like power;
 * @return {number}; 
 */
  function power(num,numP){
  
    if(numP===1){
      return num;
    }else{
      return num * power(num,numP-1);
    }
    
  }
  console.log(power(5,2));
  

  module.exports={countDigits,reverse,power};
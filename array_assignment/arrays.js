"use strict";
/**
 * 
 * @param {array} arr1 first array
 * @param {array} arr2 second array
 * @returns {boolean} true if equal else false
 */
function isArrayEqual(arr1, arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false;
        }else{
            return true;
        }
    }
    return false;
}

/**
 * 
 * @param {array} arr is input that is number array; 
 * @returns {number} result of addition of first and last elements of the array 
 */
function addends(arr){
    let theFistValue=arr[0];
    let theLastVlue=arr[arr.length-1];
    return (theFistValue+theLastVlue);
}
/**
 * 
 * @param {number} array the fuction takes number array;
 * @return {number} returns the middle value depnding the array is even or odd length;
 */
function getMiddle(array){
  let mid;
  mid=(array.length)/2;
  if(array.length%2===0){
       return (array[mid-1]+array[mid])/2;
  }else{
    return array[Math.ceil((array.length-1)/2)];
  }
}
/**
 * 
 * @param {number} arr function takes array as input;
 * @return {number} returns moving every elements to the left one time;
 */
function rotateLeft(arr){
       
    arr.push(arr.shift());
       return arr;
}  
/**
 * 
 * @param {number} arr function takes array as input;
 * @return {number} returns moving every elements to the right one time;
 */
function rotateRight(arr){
  arr.unshift(arr.pop());
     return arr;
  }
  /**
   * 
   * @param {number} arr function takes array as input; 
   * @param {number} numbMoves the number of time the elements move to the right;
   * @return {number} returns moving every elements to the right n time;
   */
function rotateNRight(arr,numbMoves){
        for(let i=0; i<arr.length;i++){
        while(i<numbMoves){ 
        arr.unshift(arr.pop());
          break;
      }
    
    }
       return arr;
    }
/**
 * 
 * @param {string} strgNumber input is any string number sparated by comma;
 * @return {number} function return the number array that is converted from the string; 
 */
function numberInputWithComma(strgNumber){
        let strgNumToArray=strgNumber.split(",");
        let numArray=[];
        for(let i=0;i<strgNumToArray.length;i++){
          numArray.push(parseInt(strgNumToArray[i]));
        }
        return numArray;
      }
      
      console.log(numberInputWithComma("12,34,-34,5,-7,9"));
/**
 * 
 * @param {number} arr the array of number that have negative value too;
 * @return {number} returns arr filter out all negative number found in array; 
 */
function filterNegativeNum(arr){
        let nonNegativeNumber=[];
        for(let i=0;i<arr.length;i++){
          if(arr[i]>=0){
            continue;
          }
          nonNegativeNumber.push(arr[i]);
        }
        return nonNegativeNumber;
      }
      
 //     console.log(filterNegativeNum([ 12, 34, -34, 5, -7, 9 ]));  
/**
 * 
 * @param {number} arrayOne; 
 * @param {number} arrayTwo;
 * @return {number};
 */
function sortedTwoArrayIn2One(arrayOne,arrayTwo){
    let newLength=arrayOne.length+arrayTwo.length;
    let newArray=[];
    let isEmptyOne=arrayOne.length>=0;
    let isEmptyTwo=arrayOne.length>=0;
    for(let i=0;i<newLength;i++){
       
      if((isEmptyOne&&isEmptyTwo) &&((arrayOne[0]<=arrayTwo[0]))){
            newArray.push(arrayOne.shift());
            
        }else if(isEmptyTwo &&((arrayOne[0]>=arrayTwo[0]))) {
           newArray.push(arrayTwo.shift());
         
        }else{
          newArray.push(arrayTwo.shift()||arrayOne.shift());}
        
      }
    return newArray;
  }
  let arr=[1,2,4,5,8,30,40];
  let ar2=[3,6,7,9,10,30];
  console.log(sortedTwoArrayIn2One(arr,ar2));
 /**
  * 
  * @param {string} arr;
  * @return {string}; 
  */
 function reverse2String(arr){
     let reversedArray=[];
     for(let i=arr.length-1;i>=0;i--){
        reversedArray+=arr[i];   
     }
     return reversedArray;
 }
 /**
  * 
  * @param {string} reverse2String;
  * @return {string};
  */
 function reverse2StringF(reverse2String){
     let result=reverse2String.join("_");
     return result;
 }
 let arrM=["chimdi","chala","Mesay","Luwam"];
 
 console.log(reverse2StringF(arrM));

/**
 * 
 * @param {number} arr; 
 * @param {number} opd1; 
 * @param {number} opd2;
 * @return {number};
 */
function filterRange(arr,opd1,opd2){
 const newArr=[];
 let arrLngth=arr.length;
 let count=0;
 for(let i=0;i<arrLngth;i++){
   if(arr[i]>=opd1 && arr[i]<=opd2){
    newArr[count++]=arr[i];
   }
  
 }
 return newArr;
}
let arrr=[0, 100, 3, 6, -555];
console.log(filterRange(arrr,6,120));
/**
 * 
 * @param {string} arr;
 * @return {string}; 
 */
function filterPalindromes(arr){
      const newArr=[];
      let ArLn=arr.length;
      let count=0;
      for(let i=0;i<ArLn;i++){
        for(let j=0;j<arr[i].length;j++){
          if(arr[i].charAt(j)===arr[i].charAt((arr[i].length-1)-j)){
                newArr[count]=arr[i];  
          }
        
        }
        count++;
      }
      return newArr;
    }
    
    let arry=["a", "kayak", "racecar"];
    console.log(filterPalindromes(arry));
    
module.exports= {isArrayEqual, addends,getMiddle,rotateLeft,rotateRight,rotateNRight,filterNegativeNum,sortedTwoArrayIn2One,};
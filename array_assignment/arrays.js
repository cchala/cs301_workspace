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
 * @param {array} arr; 
 * @returns {number} result of addition of first and last elements of the array 
 */
function addends(arr){
    let theFistValue=arr[0];
    let theLastVlue=arr[arr.length-1];
    return (theFistValue+theLastVlue);
}
/**
 * 
 * @param {number} array;
 * @return {number};
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
 * @param {number} arr;
 * @return {number};
 */
function rotateLeft(arr){
       
    arr.push(arr.shift());
       return arr;
}  
    let array3=[2,3,4,5,6,7,8];
    //console.log(rotateLeft(array3));
/**
 * 
 * @param {number} arr;
 * @return {number};
 */
function rotateRight(arr){
  arr.unshift(arr.pop());
     return arr;
  }
  /**
   * 
   * @param {number} arr; 
   * @param {number} numbMoves;
   * @return {number};
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
 * @param {number} arrayOne; 
 * @param {number} arrayTwo;
 * @return {number};
 */
 function sortedTwoArrayIn2One(arrayOne,arrayTwo){
     let newLength=arrayOne.length+arrayTwo.length-1;
     let newArray=[];
     for(let i=0;i<newLength;i++){
         if(arrayOne[i]<arrayTwo[i]){
             newArray.push(arrayOne.shift());
             //newArray.push(arrayTwo.shift());
         }else if(arrayTwo[i]<arrayOne[i]){
            newArray.push(arrayTwo.shift());
            //newArray.push(arrayOne.shift());
         }else{
             newArray.push(arrayOne.shift()||arrayTwo.shift());
         }
     }
     return newArray;
 }
 let arr=[1,2,4,5,8];
 let ar2=[3,6,7,9];
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
                count++;
          }
        }
       
      }
      return newArr;
    }
    
    let arry=["a", "kayak", "racecar"];
    console.log(filterPalindromes(arry))
    
module.exports= {isArrayEqual, addends,rotateLeft,rotateRight,rotateNRight,sortedTwoArrayIn2One,};
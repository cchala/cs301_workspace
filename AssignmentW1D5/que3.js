//``
// //Q.3
"use strict";
//let prompt=require("prompt-sync")();

// let width=+prompt("Enter the witdth of the house");
// let depth=+prompt("Enter the depth of the house");
// let height=+prompt("Enter the height of the house");
// let sew1=+prompt("Enter the sweep of the house");
// let sew=+prompt("Enter the sweep of the house");
// //living volume
/**
 * 
 * @param {number} width; 
 * @param {number} height; 
 * @param {number} depth; 
 * @return {number};
 */
function livingVolume(width,height,depth){
 return width*height*depth;
}
//console.log(livingVolume(width,heightH,depth))
  //roofVolume
/**
 * 
 * @param {number} width;
 * @param {number} sew1; 
 * @param {number} sew;
 * @return {number}; 
 */
function roofVolume(width,sew1,sew){
 return triangleArea(width,sew1,sew)*width;
}
//console.log(roofVolume(2,3,4,depth))
//area of triangle
/**
 * 
 * @param {number} width; 
 * @param {number} sew1; 
 * @param {number} sew ;
 * @return {number};
 */
function triangleArea(width,sew1,sew){
 let sAvg=(width+sew1+sew)/2;
 let result=Math.sqrt(sAvg*(sAvg-width)*(sAvg-sew1)*(sAvg-sew));
 return result;
}
//console.log(triangleArea(2,3,4))//2,3,4
/**
 * 
 * @param {number} width; 
 * @param {number} height; 
 * @param {number} depth; 
 * @param {number} sew1; 
 * @param {number} sew ;
 * @return {number};
 */
function houseVolume(width,height,depth,sew1,sew){
 let result=(livingVolume(width,height,depth)*roofVolume(width,sew1,sew));
 return result;
}
//let houseVResult=houseVolume(width,height,depth,sew1,sew);
//console.log(houseVResult);

module.exports = {houseVolume};
// `2. Write a function that computes and returns area of a circle based on the value of input radius.
// a. Write a function that compute volume of a cylinder and making use of function that
// computes area of a circle.
// `
// //Q2
// //a
"use strict";
//let prompt=require("prompt-sync")();
/**
 * 
 * @param {number} radius this number is input
 * @return {number};
 */
function areaOfCircle(radius){
  let rad=radius*radius;
  let areaOfC=Math.PI*rad;
  return areaOfC;
}
//b
//console.log(areaOfCircle(2))
/**
 * 
 * @param {number} height this input for height
 * @param {number} radiu this is the radius
 * @return {number};
 */
function volumeOfCylinder(height,radiu){
  let volumeOfc=areaOfCircle(radiu);
  return volumeOfc*height;
}
// //c
//console.log(volumeOfCylinder(2,4))

// let heightOfC=+prompt("Enter height of the circle");
// let rediusOfCr=+prompt("Enter height of the circle");
//let areaOfCirc=areaOfCircle(rediusOfCr);
//console.log("The Area of the circle is "+ areaOfCirc);
//let volumeOfCl=volumeOfCylinder(heightOfC, rediusOfCr);
//console.log("The Volume of the cylinder is $" + volumeOfCl);


module.exports = {areaOfCircle,volumeOfCylinder};



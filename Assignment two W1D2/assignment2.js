let prompt=require('prompt-sync')();
//Q1. 
let quarts =parseFloat(prompt("Please enter the number of the quarts "));
const CONV_TO_LITERES=0.94635;
let quartsConverted2litter=quarts*CONV_TO_LITERES;
console.log("The quarts converted to literes is :"+quartsConverted2litter+ " liters");


// //Q2. 
let distance_km=parseFloat(prompt("Please enter the distance in  kilometer "));
const CONVERTER=0.62137
let kiloMeterConvertedToMile=distance_km*CONVERTER;
console.log("The kilometer converted is "+kiloMeterConvertedToMile + " miles");

// //Q3
let totalBoxes =parseFloat(prompt("Please enter the number of the boxes "));
let numberOfboxOnStacked =parseFloat(prompt("Please enter the number of the boxes on stack "));
let numberOfStack=Math.ceil(totalBoxes/numberOfboxOnStacked);
//let remndarOnLastBox=totalBoxes%numberOfboxOnStacked;
console.log("The number boxs of stack is:"+numberOfStack);

//Q4
let begOdometer=parseFloat(prompt("Please enter the beginning odometer"));
let endOdometer=parseFloat(prompt("Please enter the ending odometer"));
let gallonUsed=parseFloat(prompt("Please enter the number of gallons used"));
let milegaDrived=endOdometer-begOdometer;
let milePerGallon=milegaDrived/gallonUsed;
console.log("Mile per gallon :"+milePerGallon);

//Q5
let age=parseInt(prompt("Please enter your age here"));
const RATE_TO_DEDUCT=220;
let maxHeartRate=RATE_TO_DEDUCT-age;
let min=0.65*(maxHeartRate);
console.log("The slowest rate is :"+min)
let max=0.85*(maxHeartRate);
console.log("The fastest rate is :"+max)

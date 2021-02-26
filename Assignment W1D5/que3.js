``
// //Q.3
let prompt=require("prompt-sync")();
let width=+prompt(`Enter the witdth of the house`)
let depth=+prompt(`Enter the depth of the house`)
let heightH=+prompt(`Enter the height of the house`)
let sweep=+prompt(`Enter the sweep of the house`)

// //living volume
function livingVolume(w,h,d){
 return w*h*d;
}
//console.log(livingVolume(width,heightH,depth))
  //roofVolume
function roofVolume(w,sew,sew,w){
 return triangleArea(w,sew,sew)*w;
}
//console.log(roofVolume(2,3,4,depth))
//area of triangle
function triangleArea(w,se,se){
 let s=(w+se+se)/2
 let result=Math.sqrt(s*(s-w)*(s-se)*(s-se))
 return result;
}
//console.log(triangleArea(2,3,4))//2,3,4

function houseVolume(w,h,d,sew){
 return livingVolume(w,h,d)*roofVolume(w,sew,sew,w);
}
let houseVResult=houseVolume(width,heightH,depth,sweep)
console.log(houseVResult)
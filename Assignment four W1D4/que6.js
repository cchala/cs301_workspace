`6. Write JS code to print following patterns using nested loops`
//Q.6
console.log("The first pattern")
for(let i=1;i<=5;i++){
  let result="";
  for(let j=0;j<i;j++){
    result+=i;
  }
  console.log(result);
}
console.log("The second pattern")
for(let i=1;i<=5;i++){
  let result="";
  for(let j=1;j<=i;j++){
    result+=j;
  }
  console.log(result);
}
console.log("The thrid pattern")
for(let i=5;i>=1;i--){
  let result="";
  for(let j=1;j<=i;j++){
    result+=i;
  }
  console.log(result);
}

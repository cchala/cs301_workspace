const prompt=require('prompt-sync')();
// //Q1
let weather1=prompt("please choose the weather here 1.hot : 2.rain : 3.snow :")

let weather=weather1.toLocaleLowerCase();// make all input in lowercase 

if(weather==="hot"){
    console.log(`please wear : + Sandals`)
}else if(weather==='rain'){
    console.log(`please wear : + galoshes`)
}else if(weather==='snow'){
    console.log(`please wear : + boots`)
}else{
    console.log(`please wear : + shoes`)
}

////Q2 

let student_name=prompt(`Please enter your name :`)
let credit_score=+prompt(`Please enter you score here :`)
if( credit_score<30){
  console.log(`${student_name} is freshman and he/she has ${credit_score} credit score `)
}else if(credit_score<60){
  console.log(`${student_name} is sophomore and he/she has ${credit_score} credit score `)
}else if(credit_score<90){
  console.log(`${student_name} is junior and he/she has ${credit_score} credit score `)
}else if(credit_score>90){
  console.log(`${student_name} is senior and he/she has ${credit_score} credit score `)
}else{
  console.log(`There is no negative credit score or please enter correctly`)
}


 // //Q3
let totalCost=parseFloat(prompt(`Please enter the total cost of the house :`));
let downPayment;
if(totalCost<50000){
     downPayment=0.05*totalCost;
}else if(totalCost<100000){
    downPayment=1000+0.1*(totalCost-50000);
}else if(totalCost<200000){
    downPayment=2000+0.15*(totalCost-100000);
}else{
    downPayment=5000+0.1*(totalCost-200000);
}
console.log(`Down Payment is :$${downPayment}`);

//Q4
let status1=prompt(`Please enter your status 1.student :2.faculty :3. Other:`);
let num_book_overdue=+prompt(`Please enter the number of book over due :`)
let status=status1.toLocaleLowerCase();
let numberOfDays;
if(status===`student`){
  if(num_book_overdue=0){
    numberOfDays=6;
  }else if(num_book_overdue<3){
    numberOfDays=4;
  }else{
    numberOfDays=2;
  }
}else if(status===`faculty`){
  if(num_book_overdue=0){
    numberOfDays=12;
  }else if(num_book_overdue<3){
    numberOfDays=10;
  }else{
    numberOfDays=8;
  }
}else{
  if(num_book_overdue=0){
    numberOfDays=4;
  }else if(num_book_overdue<3){
    numberOfDays=3;
  }else{
    numberOfDays=2;
  }
}
console.log(`The loan duration in a week ${numberOfDays} days `)
 ////Q5
let age=parseInt(prompt(`Please enter your age`));
let weatherSeason=prompt(`Enter weather: 1. winter 2.spring, 3.summer 4. fall`);
if(age<=5){
    if(weatherSeason===`summer` ||weatherSeason===`fall`){
        console.log(`Go to bed at 8:30 p.m`)
    }else{
        console.log(`Go to bed at 8:00 p.m`)
    }
}else if(age<=12){
    if(weatherSeason==="summer"){
        console.log(`Go to bed at 9:30 p.m`)
    }else{
        console.log(`Go to bed at 8:30 p.m`)
    }
}else{
    if(weatherSeason===`summer`){
        console.log(`Go to bed at 10:30 p.m`)
    }else{
        console.log(`Go to bed at 9:30 p.m`)
    }
}

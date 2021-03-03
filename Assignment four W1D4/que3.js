`3. Write a JavaScript program that gives the user three tries to guess the correct pin of the
account. You set the pin as a constant. When correct display “Correct, welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display “Sorry but you have been
locked out.”`
//Q.3
   let prompt=require('prompt-sync')();
   let pin = prompt(`Enter your pin number form 1 to 9 :`);
    const password =`123`;
    if(pin=== password){
        console.log(`correct, welcom back`)
    }
    else{
        console.log(`incorrect, try again `)
        pin = prompt(`Enter the enter your pin again`);
        if(pin===password){
            console.log(`correct, welcom back`)
        }else{
            console.log(`incorrect, try again `)
            pin = prompt(`Enter the enter your pin number`);
            if(pin===password){
                console.log(`correct, welcom back`)
            }else{
                console.log(`You have been locked out`)
            }
        }
     
    }
    
    let count=0;
    do{
        pin=prompt("Enter your guss pin here")
        count++;
        if(pin===password){
        console.log(`correct, welcom back`)
             break;
        }
        console.log("Incorrect, try again")
    }while(count!==3)
    if(count===3){
    console.log(`You have been locked out`)
    }
    
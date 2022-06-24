alert('Welcome to our basic arithmetic calculator');
alert("You can only perform addition, subtraction, division and multiplication here");

while(true){
    let userChoice = prompt('What will you like to do? [+, -, *, /]: ');
    alert('You chose ' +userChoice);
    if(userChoice == '+'|| '-' || '*' || '/' ){
        let result = 0;
        let num1 = Number(prompt('Enter the first number: '));
        let num2 = Number(prompt('Enter the second number: '));
        if(userChoice=='+'){
            result = num1 + num2;
            alert('The sum is '+ result);
        }
        else if(userChoice=='-'){
            result = num1 - num2;
            alert('The difference is '+ result);
        }
        else if(userChoice=='*'){
            result = num1 * num2;
            alert('The product is '+ result);
        }
        else if(userChoice=='/'){
            result = num1 / num2;
            alert('The quotient is '+ result);
        }

        //check if user wants another calculation
        //break the while loop if answer is no

        let anotherOperation = prompt('Will you like to do  another operation? (y/n): ');
        if (anotherOperation == 'n'){
            alert('Thank you for using this app. see you next time');
            break;
        }
    }
    else{
        alert('Invalid choice, try again')
    }
    
}
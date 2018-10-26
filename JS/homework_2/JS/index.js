'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt('Enter the number');
    if(!isNaN(userInput) && userInput!== null) {
    numbers.push(Number(userInput));
    } else if (userInput === null) {
            let summ = 0;
            for (let elements of numbers) {
                summ += +elements;
            } 
            alert(`Общая сумма чисел равна ${summ}`);
            console.log(summ);
        } else{
        alert('Put a number!');
    }
    
}
while (userInput !== null); 





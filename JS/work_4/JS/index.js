'use strict'
// While
// let number = 0;
// let arr = [];
// // пока счетчик меньше 4
// while (number < 4) {
//     let userNumber = prompt('Enter nuber');
//     if(userNumber !== null && userNumber !=='') {
//     arr.push (+(userNumber));
//     number++;
//     }else if (Number(userNumber)=== 9){
//         continue;
//     } else {
//         break;
//     }
// }
// console.log(arr);



// // do while
// let number = 1;
// do {
//     console.log(number);
//     number++;
// }
// while (number < 5);


// // цикл for
// let arr = [];
// for (let i = 0; i < 10; i+=1) {
//     let number = prompt('Enter number');
//     arr.push(number);
// }
// console.log(arr);

// // задача
// let arr = [5, 10, 25, 68, 78, 95];
// for(let i = 0, max = arr.length; i < max; i++) {
//     console.log (arr[i]*arr[i]);
// // }


//                           !!!!!!!!!!!!!!
// for(let i = 0, max = arr.length; i < max; i++) =  for (let element of arr)
//                           !!!!!!!!!!!!!
                  


// let arr = [5, 10, 25, 68, 78, 95];
// for (let element of arr) {
    
// }



// 3адача

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// 


// // Задача 2

// /*
//   Напишите скрипт, который выводит через console.log все 
//   числа от min до max, с двумя исключениями: 
    
//     - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
//     - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
//   PS: используйте цикл for
// */

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//     if ( i %3 === 0) {
//         console.log('Fizz');
//     }else if (i %5 === 0 && i %3 !== 0) {
//         console.log('Buzz');
//     }else {
//         console.log(i);
//     }
// }


// Задача 3

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const string = "May the force be with you";
// let longestWord = '';
// let arr = string.split (' ');
// for (let i = 0; i < arr.length; i+=1) {
//     // console.log (arr [i]);
//     if (longestWord.length < arr[i].length) {
//         longestWord = arr[i];
//     }
// }
// console.log(longestWord);
// console.log(arr); // 'force'
// console.log(arr[2])



// Задача 4

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  
  - Заканчивает запрашивать числа, как только посетитель введёт не число 
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let number;
// let arr = [];
// do {
//     number = prompt('Enter number');
//     if (number !==null && !isNaN(number)) {
//     arr.push(Number(number));
//     }
// } while (number !==null && !isNaN(number));
// console.log(arr);
// if (arr.length > 0) {
//     let summ = 0;
//     for (let element of arr) {
//         summ += +element;
//     }
//     console.log(summ);
// }

// Задача 5

// Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить 
//   что было введено. Преобразовать input в числовой тип и проверить 
//   число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было 
//       введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41];
// let prom;
// do {
//     prom = prompt('Enter number between 12 and 41');
// if (!isNaN(prom) && prom >= 12 && prom<=41) {
//     if (numbers.includes(Number(prom))) {
//         alert('Поздравляем, Вы угадали!');
//     }else {
//         alert('Сожалеем, Вы не угадали!');
//     }
// }else {
//     alert('Должно быть введено число между 12 и 41');
// }
// }while (prom !== null);



    
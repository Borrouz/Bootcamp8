'use strict'
// первій способ создания функции
// function addTwoNumbers () {
//     console.log(5+6)
// }
// addTwoNumbers();
// Если этим способом, можно функцию запустить и в начале кода и в конце


// второй способ
// const addTwoNumbers = function () {
//     console.log(5+6);
// }
// addTwoNumbers();
// можно запустить только ниже константы



// // return получить результат функции. так же останавливает функцию
// function addTwoNumbers() {
//     let result = 5 + 6;
//     return result;
// }
// let sum = addTwoNumbers();
// console.log(sum);


// параметры и аргументы
// function addTwoNumbers(a, b) {
//         let result = a + b;
//         return result;
// }
// addTwoNumbers(5, 6);



// // Array.from - создает массив    !!!Arguments псевдо массив
// function add (a,b) {
//     // console.log(arguments);
//     let arr = Array.from(arguments);
//     let total = 0;
//     for (let el of arr) {
//         total +=el;
//     }
//     return total;
// }
// console.log(add(5, 10, 20));
// console.log(add(1));
// console.log((7,4,5,6,10));
// add(5, 10, 20);
// add (1);
// add(7,4,5,6,10);


// пропуск параметра
// // если пишем параметр = 5 это означает если в аргументе нет указаного параметра то заменяет его на число после =
// function connect (par1 = 5, par2 = 6) {
//     return par1 + par2;
// }
// // в аргумент параметр которого хочем пропустить пишем NULL!!!!!!!
// connect(5,6);                        
// connect(null,2);
// console.log(connect(null,2));


// Задача 1

/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// function checkNumberType (a) {
//     if (a%2 === 0) {
//         return 'Even';
//     } else {
//         return 'Odd';
//     }
// }
// console.log( checkNumberType(2) ); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); // 'Odd'



// Задача 2
/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// function formatString (str) {
//     if (str.length <= 40) {
//         return str;
//     }else {
//         let res = str.slice(0,40);
//         res = res+'...';
//         return res;
//     }
// }

// // Вызовы функции для проверки
// console.log(formatString("Curabitur ligula sapien, tincidunt non.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
//   ); // вернется форматированная строка
  
//   console.log(
//     formatString("Curabitur ligula sapien.")
//   ); // вернется оригинальная строка
  
//   console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
//   ); // вернется форматированная строка


// Задача 3
/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки



// function checkForSpam (str) {
    
//     if (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log( checkForSpam('Latest technology news') ); // false

// console.log( checkForSpam('JavaScript weekly newsletter') ); // false

// console.log( checkForSpam('Get best sale offers now!') ); // true

// Задача 4
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки



// function getPx (str) {
//     if (typeof str === 'string') {
//         return parseFloat(str);
//     } else {
//         return null;
//     }
// }

// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null



// Задача 5

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/


// Вызовы функции для проверки
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
    
//   console.log(findLongestWord("Google do a roll")); // вернет 'Google'
  
//   console.log(findLongestWord("May the force be with you")); // вернет 'force'


//   function findLongestWord(longestWord) {
//     let x = longestWord.split (' ');
//     let z = 0;
//     let res;
//     for (let i = 0;i < x.length; i++) {
//         if (x[i].length> z){
//             z = x[i].length;
//             res = x[i];
//         }
//     }
//    return res;
//   }

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // вернет 'jumped'
    
//   console.log(findLongestWord("Google do a roll")); // вернет 'Google'
  
//   console.log(findLongestWord("May the force be with you")); // вернет 'force'


// Задача 6

/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
// let y = 0;
// function findLargestNumber(numbers) {
//     for (let i of numbers) {
//         if (i > y) {
//             y = i;
//         }
//     }
//     return y;
// }

// // Вызовы функции для проверки
// console.log(findLargestNumber([1, 2, 3])); // вернет 3
  
// console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27
  
// console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128


//  Задача 7
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/
// const uniqueNumbers  = [2, 1, 4, 9];
// function addUniqueNumbers() {
//     let arr = Array.from(arguments);
//     for (let i of arr) {
//         if (!uniqueNumbers.includes(i)) {
//             uniqueNumbers.push(i);
//         }
//     }
//     return uniqueNumbers;
// }




// addUniqueNumbers(1, 2, 3);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

// addUniqueNumbers(12, 2, 3, 19);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]



// Задача 8

/*
  Создайте функцию removeFromArray(arr), 
  которая получает 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Удалите все элементы из исходного массива, 
  которые имеют такое же значение, что и аргументы.
*/
function removeFromArray(arr) {
    let x = Array.from(arguments);
    for (let i of arr) {
        if(arr.includes(x[i])) {
            arr.splice(i,1,x[i]);
        }
    }
    return arr;
}

// Вызовы функции для проверки
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]
  
  console.log(
    removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
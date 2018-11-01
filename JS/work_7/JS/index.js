'use strict'

// // Метод функций
// let numbers = [10,2,5];
// let result = arr.method(function(num, index, arr) {   ----->    index и arr ипользуется чтоб сделать что-то с отдельніми елементами массива.
//     num > arr[index+1]
// })



// // Метод map !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!перебирает єлементы массива и делает с ними что угодно
// // всегда создает новый массив. Тобишь копию оригинального массива
// let money = [500, 800, 100, 400, 1000];
// // let result=[];
// // for (let el of money) {
// //     result.push(el*0.7);
// // }
// // console.log(result);

// // let result = money.map(function(el){
// //    return    el*0.7;
// // })
// // console.log(result);

// // let result = money.map(el => {
// //     return el * 0.7;
// // });

// // let result = money.map(el => el * 0.7);

// // let result = money.map(el => el > 500 ? el * 0.7 : el);
// // console.log(result);

// // Задача
// // Вывести только имена и записать в переменную
// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }
// ];
// // let result = [];
// // for (let el of inventors) {
// //     result.push(el['first']);
// // }
// // console.log(result);

// // let result = inventors.map(function(el){
// //     return el.first;
// // });


// // let result = inventors.map(el => el.first);
// // console.log(result);


// Метод filter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// перебрать массив и найти числа <= 10
// тоже всегда создает новый массив без  отфильтрованых елементов
// const numbers = [250, 1, 10, 3, 25, 5, 60, 7, 12, 9];

// let result = [];
// for (let el of numbers) {
//     if (el <= 10) {
//         result.push(el);
//     }
// }
// console.log(result);

// let result = numbers.filter(function(el){
//     if (el <= 10) {
//         return el;
//     }
// });
// console.log(result);

// let result = numbers.filter(el => {
//     if(el <=10){
//         return el;
//     }
// })
// console.log(result);

// let result = numbers.filter(el => el <= 10 ? el : null);
// console.log(result);

// Задача
// // // Вывести только в 16 столетии
// const inventors = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
//   },
//   {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
//   },
//   {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
//   },
//   {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
//   },
//   {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
//   },
//   {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
//   },
//   {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
//   },
//   {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
//   },
//   {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
//   },
//   {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
//   },
//   {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
//   },
//   {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
//   }]

//   let result = inventors
//   .filter(el => el.year >=1500 && el.year < 1600)
//   .map(el => el.first);
//   console.log(result);



// Метод Find
// в переменную записывает тот елемент первый который будет соответсвовать условию
// const numbers = [0, 1, 10, 3, 25, 5, 60, 7, 12, 9];
// let result = numbers.find(el => el >5);
// console.log(result);


//Метод every
// проверяет каждый елемент массива на правило. Если все елементы удовлетворяют условия - возвращает true если хоть один не удовлетворяет - falce
// const temperature = [25, 15, -10, 28, 5];
// let result = temperature.every(el => el > 0);
// console.log(result);


// Метод summ
// если хоть один елемент массиваа удовлетворяет условия, то выводит true
// const temperature = [25, 15, -10, 28, 5];
// let result = temperature.summ(el => el > 0);
// console.log(result);


// // Метод reduse
// // прибовляет все елементы
// const numbers = [250, 1, 10, 3];
// // let result = numbers.reduce(function (acc, element){   // ---------> acc обязательный параметр метода reduce. туда будет сохранятся результат соеденения елементов массива. первым пишеться акумулятор потом елемент
// //     return acc +element;
// // },0) //--------->0 - это мы задали начальное значения акумулятора
// // console.log(result);
// let result = numbers.reduce((acc, el) => acc + el, 0);
// console.log(result);

// ЗАдача сложить в резалт намбер
// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
//     ];

//     let result = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number,0);
//     console.log(result);



// Метод sort!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Сортировка елементов массива в любом порядке если строки то по алфавиту в порядке убывания или возростания если числа то в порядке убывания или возростания
//всегда изменяет оригинал массива поэтому лучше делать копию массива
// всегда есть два параметра

// запись для чисел
// const numbers = [1, 250, 10, 3, 25, 5, 60, 7, 12, 9];
// // numbers.sort(function(a, b) {
// //     if (a > b) {  //--------> если вот так то сортировка в порядке возростания, а если a < b то в порядке убывания. это шаблон для чисел
// //         return 1;
// //     }else {
// //       return -1;
// //     }
// // });
// // console.log(numbers);

// numbers.sort(function(a, b) {
//     return a-b; //--------> если вот так то сортировка в порядке возростания, а если b-a то в порядке убывания. это шаблон для чисел
// });
// numbers.sort((a, b) => a-b)


//Запись для строк
// const words = ['a', 'q', 'b', 's', 'z'];
// words.sort(); //----отсортировать в алфавитном порядке
// words.sort().reverse(); //-------отсортировать в алфавитном порядке с конца
// words.sort((a,b) => a < b); //------- то же самое что на строчку выше
// words.sort((a,b) => a > b ? 1 : -1); //------ то же самое что выше на строчку
// console.log(words);



// Метод forEach !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Теперь работает для работы с псевдомассивами




// // Задача
// const scientist = [{
//     first: 'Albert',
//     last: 'Einstein',
//     year: 1879,
//     passed: 1955
// },
// {
//     first: 'Isaac',
//     last: 'Newton',
//     year: 1643,
//     passed: 1727
// },
// {
//     first: 'Galileo',
//     last: 'Galilei',
//     year: 1564,
//     passed: 1642
// },
// {
//     first: 'Marie',
//     last: 'Curie',
//     year: 1867,
//     passed: 1934
// },
// {
//     first: 'Johannes',
//     last: 'Kepler',
//     year: 1571,
//     passed: 1630
// },
// {
//     first: 'Nicolaus',
//     last: 'Copernicus',
//     year: 1473,
//     passed: 1543
// },
// {
//     first: 'Max',
//     last: 'Planck',
//     year: 1858,
//     passed: 1947
// },
// {
//     first: 'Katherine',
//     last: 'Blodgett',
//     year: 1898,
//     passed: 1979
// },
// {
//     first: 'Ada',
//     last: 'Lovelace',
//     year: 1815,
//     passed: 1852
// },
// {
//     first: 'Sarah E.',
//     last: 'Goode',
//     year: 1855,
//     passed: 1905
// },
// {
//     first: 'Lise',
//     last: 'Meitner',
//     year: 1878,
//     passed: 1968
// },
// {
//     first: 'Hanna',
//     last: 'Hammarström',
//     year: 1829,
//     passed: 1909
// }
// ];


// // 1) отримати масив вчених що народилися в 19 ст
// // let result = scientist
// // .filter(el => el.year>=1800 && el.year <= 1900 ? el : null)
// // .map(el => el.first);
// // console.log(result);

// // 2) знайти суму років скільки прожили всі вченні
// // let result = scientist
// // .reduce((acc, el) => (el.passed - el.year)+acc, 0);
// // console.log(result); 

// // 3) Відсортувати вчених по алфавіту
// // scientist.sort((a,b) => a.first > b.first ? 1 : -1);
// // console.log(scientist);

// // 4) Відсортувати вчених по даті народження
// // scientist.sort((a, b) => a.year-b.year)
// // console.log(scientist);

// // 5) Відсортувати вчених по кількості прожитих років
// // scientist.sort((a, b) => (a.passed-a.year)-(b.passed-b.year));
// // console.log(scientist);

// // 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// // let result = scientist.filter(el => el.year >=1400 && el.year<=1700 ? null : el);
// // console.log(result);

// // 7) Знайти вченого який народився найпізніше.
// // scientist.sort((a,b) => b.year-a.year);
// // console.log(scientist[0]);

// // 8) Знайти рік народження Albert Einstein
// // scientist.sort ((a,b) => a.first > b.first ? 1 : -1);
// // console.log(scientist[1].year);

// // 9) Знайти вчених прізвище яких починається на літеру С
// // let result = scientist.filter(el => el.last[0] === 'C');
// // console.log(result);

// // 10) Видалити з масива всіх вчених імя яких починається на A
// // let result = scientist.filter(el => el.first[0]!== 'A' ? el : null);
// // console.log(result);




    
'use stict'

// let arr = [52, 23, 12,10];
// console.log(arr);


// let arr2 = new Array(2, 5, 10);
// console.log(arr2);


// let firastArray = [1, 2, 3, 4, 8, 5, 10, 7, 9];
// console.log(firstArray[1]);
// console.log(firstArray[6]);


// let arr = [1,2,3,4,[1,2,5,9,12,15,[23,24,124,2,[34.3,5,98,['Error']]]]];
// console.log(arr[2]);
// console.log(arr[4][3]);  чтоб достучатся к 5
// console.log(arr[4][6][2]); чтоб достучатся к числу 124
// console.log(arr[4][6][4][3][0]); достучатся к Error


// let firstArray = [1,2,3];
// console.log(firstArray[0]);
// firstArray[0] = 100;
// console.log(firstArray);

// метод push
// let firstArray = ['Иван', 'Вася', 'Сережа'];
// firstArray.push('Петро', 'Ираклий');
// firstArray.push(10);
// console.log(firstArray);

// метод рор
// let firstArray = ['Иван', 'Вася', 'Сережа'];
// firstArray.push('Петро', 'Ираклий');
// let user = firstArray.pop();
// console.log(firstArray);

// метод shift
// let firstArray = [1,2,3];
// console.log(firstArray.shift());
// console.log(firstArray);


// метод unshift
// let firstArray = [1,2,3];
// firstArray.unshift(27, 52);
// console.log(firstArray);


// let firastArray [5,8,13,14,25,26,98,75];
// let lenghtArr = firastArray.lenght;
// console.log(firastArray[lenght - 1]);

// узнаем индекс елемента
// let firastArray = ['abc', 'h', 'b', 'd'];
// console.log(firstArray.indexOf('abc'));

// // узнаем наличие елемента в массиве
// let firstArray = [11, 112, 23, 45];
// console.log(firstArray.includes(23));
// console.log(firstArray.includes(150));


// Задача 1
// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col'];
// let login = prompt('Enter your login');
// if (login.includes(logins)) {
//     alert('Your login already exist');
// }else {
//     alert('Welcome');
//     logins.push(login);
// }
// console.log(logins);
// logins.includes(login) ? alert ('Error') : alert ('Good');

// 1) Запитати логін через prompt
// 2) Перевірити чи існує логін в масиві logins
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 


// // метод объеденения массивов concut
// let firstArray = [10, 8, 7, 5];
// let secondArr = [12, 13, 16, 19, 87];
// let newArray = ['add me', 'join us'];
// let result = firstArray.concat(secondArr, newArray);
// console.log(result);



// slice and splice
// slice start index and end index do not includes
// splice start index and how many

// let arr = [5, 10, 12, 15, 25];
// let newArr = arr.slice(0,2);
// let arr3 = arr.slice(3);


// splice
// let arr = [1, 5, 9, 8, 7, 10];
// // // delete
// let x = arr.slice();
// x.splice(2,1);

// x.splice(2,0,999);
// let x = arr.splice(1, 1);
// console.log(arr);
// console.log(x);
// // paste
// let a = arr.splice(4, 1, 'b','c','f');
// arr.splice(1, 0, 'javascript');
// console.log(arr);
// // replace
// arr.splice(5, 1, 'abc');
// console.log(arr);
// arr.splice(1, 4, 'java', 'script');
// console.log(arr);


// let animals = ["cat","dog","rabbit","bird","fish"];
// let len = Math.floor(Math.random()*animals.length);
// console.log(len);
// let pro = prompt('введите название животного (cat dog rabbit bird fish)');
// let comp = animals[len];
// if (pro === comp) {
//     alert('You win!');
// }else {
//     alert('You loose!');
// }



/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/
// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
// let len = users.length;
// console.log(len); // 4

// console.log(users[len-3]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax





// /* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// /* Используя методы массива, последовательно выполнить следующие операции */
// // Удалить из начала массива нулевой элемент
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]
// // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]
// // Добавить в начало массива любое имя
// users.unshift('Коля');
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]
// // Добавить в конец массива два любых имени за одну операцию
// users.push('ВАСА', 'толя');
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


// // Написати гру Камінь Ножиці Папір.
// // Варіанти вибору потрібно зберігати в масиві
// // Користувач вводить свій варіант
// // Компютер вибирає свій рандомний варівант з масиву
// // Первіряємо вибір користувача і вибір компютера. 
// // Опрацювати всі варіанти:
// // 1) Варіанти де виграє користувач
// // 2) Варіанти де виграє компютер
// // 3) Варіанти де виходить нічия.
// let index= ['камень', 'ножницы', 'бумага'];
// let y = prompt('Введите свой вариант').toLowerCase();
// let comp = Math.floor(Math.random()*index.length);
// let x = index[comp];
// alert(x);
// if (y ==='камень' && x === 'ножницы' || y === 'ножницы' && x === 'бумага' || y === 'бумага' && x==='камень') {
//     alert('Вы выиграли!');
// }else if (x === y) {
//     alert('Nobody wins');
// }else {
//     alert('You loose!');
// }




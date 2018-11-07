'use strict'


/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
//   ];
  
//   const getPropValues = (arr, prop) => arr.map(el => el[prop]);
  
  
//   // Вызовы функции для проверки
//   console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
//   console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
//   console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]





// Задание 3

/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];
//   const setGuestState = (guests, period) => guests.map(el => el.inactiveDays > period ? el.isActive = false : el.isActive = true);
// // Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true


// Задание 4

// /*
//   Напишите функию getActiveGuests(guests), принимающую 
//   один параметр guests - массив объектов гостей. 
  
//   Функция должна возвращать массив объектов гостей,
//   значение поля isActive которых true.
         
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// let getActiveGuests = (guests) => guests.filter(el=>el.isActive === true ? el : null);
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax



// // Задача 5


// /*      
//   Напишите функцию getGuestsOlderThan(guests, age), где 
//   guests - массив объектов гостей, age - предел возраста 
//   для сортировки. 
  
//   Функция возвращает массив объектов значение свойства 
//   age которых больше чем параметр age.
  
//   PS: обязательно используйте функциональные методы массивов, никаких for!
// */

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];
// let getGuestsOlderThan = (guests, age) => guests.filter(el => el.age > age);
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []


// Задача 6
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20 },
//   { id: 2, name: 'Poly', age: 18 },
//   { id: 3, name: 'Ajax', age: 30 },
//   { id: 4, name: 'Chelsey', age: 45 }
// ];
// let getGuestById = (guests, id) => guests.filter(el => el.id === id);
// // Вызовы функции для проверки
// console.log(getGuestById(guests, 3)); // {id: 3, name: 'Ajax', age: 30}

// console.log(getGuestById(guests, 1)); // {id: 1, name: 'Mango', age: 20}

// console.log(getGuestById(guests, 5)); // undefined


// Задача 7

// /*
//   Используя метод reduce, посчитайте сумму 
//   всех значений свойств объекта order.
// */ 
// const order = {
//   bread: 10,
//   apples: 25,
//   chicken: 60,
//   milk: 15,
//   cheese: 40
// };
// let values = Object.values(order);
// let result = values.reduce((acc, el)=> acc+el,0);

// console.log(result); // 150


// Задача 8
/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};

const arr = [];
let getTotalPrice = (function (products, order) {
  for (let key in order) {
      arr.push(order[key] * products[key]);
    }
    return arr.reduse ((acc,el) => acc + el,0)
  })ss;
// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130
'use strict'

// // Замыкание
// let user = counter();
// let user2 = counter();
// function counter () {
//     let counter = 0;
//     function increment () {
//         count++;
//         console.log(count);
//         }
// return increment;  
// }

// Объект
// const HOTEL_NAME = 'Resort Hotel';
// const STARS = 5;
// const STATUS = 'LUX';
// const ROOM_NUMBERS = 100; 

// const HOTEL = {
//     name: 'Resort Hotel',
//     stars : 5,
//     status : 'LUX',
//     room_numbers : 100,
//     personal : ['bob', 'bender', 'homer'],
// };
// console.log(HOTEL.name);
// console.log(HOTEL.personal[0]);
// console.log(HOTEL['status']);



// const obj1 = {
//   name: "chack",
// };
// let obj2 = obj1;
// obj1.age = 50;
// console.log(obj1);
// console.log(obj2);



// Копия объекта     assign - обїеденение объектов

// let user = {
// name : 'Bob',
// age : 45,
// isHappy : true,
// }

// let user2 = Object.assign({}, user); // {} сюда вместо скобок пишется объект к которому будут добовлятся другие объекты через запятую. {} чтоб просто скопировать объект
// user.age=40



// spread operator (...)

// const a = {x: 1, y: 2};
// const b = {x:0, z: 3};
// // const c = Object.assign({},a,b);
// const c = {
//     ...a,
//     ...b,
// };




// let hotel = {
//     name: '7 days',
//     stars: 4,
//     rooms: 150,
// }

// for (let key in hotel) {
//     // console.log(key);
//     // console.log(hotel[key]);
//     if(hasOwnProperty(key)) {
//         console.log (`${key}: ${hotel[key]}`); // -------> проверка есть ли ключ в объекте и проверяет только ввнутри объекта не лезет в прототипы.
//     }
// }





// // методы для получения отедльно значений ключей или отдельно значений объекта
// // получить список ключей
// let hotel = {
//     name: '7 days',
//     stars: 4,
//     rooms: 150,
// }
// const keys = Object.keys(hotel);
// console.log(keys)

// // получить список значений объекта
// const values = Object.values(hotel);
// console.log(values);

// //метод Object.enteries
// const enteries = Object.enteries(hotel);  // делает массив [ключ, значение]
// console.log(enteries);



// // деструкторизация
// let hotel = {
//     name: '7 days',
//     stars: 4,
//     rooms: 150,
// }

// // let name = hotel.name;
// // let stars = hotel.stars;                                               
// // let capacity = hotel.capacity;      
//                                           //-----------------> более длинная и короткая запись
// // const {name, stars, capacity} = hotel;
// // console.log(name);


// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// showObjVal(dog);

// function showObjVal({name, age, isHappy}) {
//     console.log(name);
//     console.log(age);
//     console.log(isHappy);
//     // return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
// //
// showObjVal(dog);


//деструктуризация массивов
// let strNum = ['one', 'two', 'three'];
// // console.log(strNum[0],strNum[1],strNum[2]);
// let [a, b, c, d] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
'use strict'
// Задача 1
/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
// class Account {
//     constructor (login, email, friendsCount) {
//         this.login = login;
//         this.email = email;
//         this.friendsCount = friendsCount;
//     }
//     getAccountInfo () {
//         console.log(this.login);
//         console.log(this.email);
//         console.log(this.friendsCount);
//     }
// }


// let mango = new Account('Mango', 'edfjqrfhqlrj@alkehrl', 5);
// mango.getAccountInfo();



// Задача 2
/*
  Напишите ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.
  
  Добавьте классу следующие методы:
  
    - getValue() - возвращает текущее значение поля value
  
    - append(str) - получает парметр str - строку и добавляет 
      ее в конец значения поля value
    
    - prepend(str) - получает парметр str - строку и добавляет 
      ее в начало значения поля value
  
    - pad(str) - получает парметр str - строку и добавляет 
      ее в начало и в конец значения поля value
*/
// class StringBuilder {
//     constructor (string) {
//         this.value = string;
//     }
//     getValue() {
//         return this.value;
//     }
//     append(str) {
//         this.value = `${this.value}${str}`; 
//     }
//     prepend(str) {
//         this.value = `${str}${this.value}`;
//     }
//     pad (str) {
//         this.value = `${str}${this.value}${str}`;
//     }
// }




// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.getValue()); // '.^'

// builder.prepend('^'); 
// console.log(builder.getValue()); // '^.^'

// builder.pad('='); 
// console.log(builder.getValue()); // '=^.^='



// Задача 3
/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(maxSpeed) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
     
//         /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
          
//           - maxSpeed - для хранения максимальной скорости 
          
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
            
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//         this.running = true;
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//         this.running = false;
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
    
//     accelerate(spd) {
//         if (this.maxSpeed >= spd) {
//             this.speed = spd;
//         }else {
//             console.log('wrong properties');
//         }
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
    
//     decelerate(spd) {
//         if (this.maxSpeed>= spd && spd > 0) {
//             this.speed = spd;
//         }else {
//             console.log('wrong properties');
//         }
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//         if (this.running === true) {
//             this.distance = this.speed * hours;
//         }else {
//             console.log('car is not working');
//         }
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
    
//     getSpecs (obj) {
//         console.log(obj.maxSpeed);
//         console.log(obj.running);
//         console.log(obj.distance);
//     }
//   }
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.accelerate(100);
//   someCar.drive(2);
  
//   someCar.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200

// Задача 4
/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
 
*/


// Задача 5 


/*
  Добавьте классу Car свойство value - цена автомобиля.
  
  Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
  Геттер вернет текущее значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят
  
  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
    
  Использование выглядит следующим образом:
  
  const myCar = new Car(50, 2000);
  
  myCar.value; // 2000
  myCar.value = 4000;
  myCar.value; // 4000
*/

// class Car {
//     constructor(maxSpeed, value) {
//       // ... код
//       this._value = value;
//     }
//     get value () {
//        return this._value;
//     }
//     set value (value) {
//         this._value = value;
//     }
//     // ... код
//   }
//   const myCar = new Car(50, 2000);
  
//   console.log(myCar.value); ; // 2000
//   myCar.value = 4000;
//  console.log(myCar.value);; // 4000
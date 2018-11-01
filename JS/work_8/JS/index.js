'use strict'

//This!!!!!!!!!!!!!! !!!!!!! !!!!!!!! !!!!!! !!!!!!!! !!!!!!!!!! 
// const hotel = {
//     name : '7 Days',
//     stars : 4,
//     rooms : 150,
//     hasSwPool : true,
//     hasCort : false,
//     showName() {
//         console.log(`${this.name}`);                                          
//     },
//     changeRoooms (number) {                                                    //ниже то что спрашивают на собеседовании
//         this.rooms = this.rooms - number;        //--- this это контекст исполнения функции. определяется после запуска функции (в обычных функциях). Пишеться вместо "hotel" чтобесли вдруг меняется название функции, не менятся.
//         return this.rooms;                       // ---- контекст исполнения функци это ссылка на объект который запускает функции
//     },                                           // ---- если функция запускаеться не hotel.showThis(), а showThis то если включен "use strict" вернет undefined, а если не включен то windows
//     openCort() {                                 // ----- для стрелочной функции this определяется во время написания функции
//         this.hasCort = !this.hasCort;            //----стрелочная функция не имеет своего this берет значение контекста выполнения функии у родителя если нет то выдает windows;
//     },

//     wrapper() {
//         //this = motel
//         const showThis = () => {
//             console.log('Show this context', this);
//         };
//         showThis();
//     }
    
// }
// console.log(hotel.stars);
// hotel.showName();
// hotel.changeRoooms(10);
// console.log(hotel.rooms);
// hotel.openCort();
// console.log(hotel.hasCort);
// hotel.wrapper();


// Методы оперирования функциями внутри объекта
// Метод call
// const hotel = {
//     name: 'Resort Hotel',
//     price: 2500,
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
//     price: 500,
// };
// const hotel3 = {
//     name: '7 days Hotel',
//     price: 700,
// };

// function showInfo(name, age
//     ) {
//     console.log(`Hello ${name} you live in ${this.name} and ${this.price} ${age}`);
// }


// showInfo.call(hotel, 'Homer', 25);
// showInfo.call(hotel3, 'Fry', 32);

// // Метод apply

// showInfo.apply(hotel, ['Homer', 25]);
// showInfo.apply(hotel3, ['Fry', 32]);

// // Меттод bind привязка контекста
// // Делает копию оригинальной функции и к ней привязвает объект который передаем в скобках
// const boundShowInfo = showInfo.bind(hotel);
// boundShowInfo();



// Конструкторы
// функция в которую записываем шаблон создания  объекта. для того чтоб создавать много похожих объектов с одинаковыми ключами но разными значениями
// const Tank = {
//     speed: 100,
//     armor: 50,
//     life: 100,
//     damage: 20,
//     name: 'Tiger',
//     nickName: 'tankist',
//     amunition: 10,
//     x: 0,
//     y: 0,

//     move(a,b) {
//         this.x = a;
//         this.y = b;
//     },

//     fire() {
//     this.amunition > 0 ? this.amunition-=1 : alert('Enter card number');
//     },

//     heal(size) {
//         this.life + size > 100 ? this.life = 100 : this.life += size;
//     },
// };

// Tank.move (50, 150);
// Tank.fire();
// Tank.fire();
// Tank.fire();
// Tank.life = 50;
// Tank.heal(25);
// console.log(Tank);
// function Tank (speed, amunition, armor, nickName, x, y) {
//     // this = {} - суть, при запуске конструктора создается пустой объект, который мы наполняем переданными аргументами, return объект.
//     // return this
//     this.speed = speed;
//     this.amunition = amunition;
//     this.armor = armor;
//     this.nickName = nickName;
//     this.x = x;
//     this.y = y;
//     this.life = 100;
//     this.damage = 20;
//     this.name = 'Tiger';
//     this.move = function(a,b) {
//         this.x = a;
//         this.y = b;
//     };
//     this.fire = function() {
//         this.amunition > 0 ? this.amunition-=1 : alert ('You have to recharge')
//     };
//     this.heal = function (size) {
//         this.life+size > 100 ? this.life : this.life += size;
//     };
// }
// let tiger = new Tank(10, 30, 45, 'Hell', 0, 0);
// let scorpion = new Tank(20,40,60,'Devil', 65,90);
// console.log(tiger);
// console.log(scorpion);

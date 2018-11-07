'use strict'

// Клас - ескіз(шаблон) обєкта з яким маємо працювати (машина) Атрибути класа це колеса, двигун і тд
// Методи - завестися, відкрити двері, збільшити швидкість
// Обєкт - екземпляр класа який створили з шаблона
// Інтерфейс - набір методів доступних для вмкористання іншими класами (приборна панель автомобіля, кнопки на автоматі з видачі вкусняшок)
// Абстракція - виділеня головних характеристик обєкту і відкидання незначних не вдаючисть в роздуми як методи працюють зсередини. (map, filter, sort)
// Інкапсуляція - приховання всіх внутрішніх процесів від користувача
// Наслідування - створення нового класу на базі існуюучого
// Поліморфізм - використання обєктів з однаковим інтерфейсом без інфи про внутрішню структуру.

// const Video = function (size, duration, title, format, hd, author) {
//     this.size = size;
//     this.duration = duration;
//     this.title = title;
//     this.format = format;
//     this.hd = hd;
//     this.author = author;
//   }
  
//   Video.prototype.getFullInfo = function () {
//     return `${this.author} ${this.title} ${this.duration}`;
//   }
  
//   Video.prototype.archive = function (num) {
//     this.size = parseFloat(this.size) / num + 'gb';
//   }
  
//   Video.prototype.changeAuthor = function (newAuthor) {
//     this.author = newAuthor;
//   }
  
//   Video.prototype.changeTitle = function (newTitle) {
//     this.title = newTitle;
//   }
  
//   const Stream = function(size, duration, title, format, hd, author, status) {
//     Video.call(this, size, duration, title, format, hd, author);
//     this.status = status;
//   }
  
//   Stream.prototype = Object.create(Video.prototype);
//   Stream.prototype.constructor = Stream;
  
//   Stream.prototype.changeStatus = function() {
//     this.status = !this.status;
//   }


  // class video {
  //     constructor(size, duration, title, format, hd, author) {
  //       this.size = size;
  //       this.duration = duration;
  //       this.title = title;
  //       this.format = format;
  //       this.hd = hd;
  //       this.author = author;
  //     }
  //     getFullInfo() {
  //       return `${this.author} ${this.title} ${this.duration}`;
  //     }
  //     archive(num) {
  //       this.size = parseFloat(this.size) / num + 'gb';
  //     }
  //     changeAuthor (newAuthor){
  //         this.author = newAuthor;
  //     }
  //     changeTitle(newTitle) {
  //         this.title = newTitle;
  //     }
  // }

  // let movie = new Video('25gb', '120min', 'Movie 43', 'MPG4', true, 'WB');
  // console.log(movie.getFullInfo());
  // console.log(movie);

  // class Stream extends Video {
  //     constructor (size, duration, title, format, hd, author, status){
  //       super(size, duration, title, format, hd, author);
  //       this.status = status;
  //     }
  //     cnange.status(){
  //       this.status = !this.status;
  //     }
  //     static greet() {
  //       console.log('Hello I am static method');
  //     }
  // }

  /*
  Создайте класс Car с указанными полями и методами.
*/
/*
      Добавьте свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        
        - maxSpeed - для хранения максимальной скорости 
        
        - running - для отслеживания заведен ли автомобиль, 
          возможные значения true или false. Изначально false.
          
        - distance - содержит общий киллометраж, изначально с 0
    */
class Car {
  constructor(maxSpeed, speed, running, distance) {
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
  }

  turnOn() {
    this.running = true;
    // Добавьте код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавьте код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }
  
  accelerate(spd) {
    if (spd <= this.maxSpeed) {
      this.speed = spd;
    }
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }
  
  decelerate(spd) {
    if (spd<this.maxSpeed && spd>0) {
      this.speed = spd;
    }
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    if (this.running = true) {
      this.distance = this.speed * hours;
    }
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }
  static getSpecs(obj) {
    console.log(`speed: ${obj.speed}, maxSpeed ${obj.maxSpeed}, running: ${obj.running}, distance: ${obj.distance}`);
  }
}
// let BMW = new Car (200, 0);
// BMW.turnOn();
// BMW.accelerate(120);
// BMW.drive(5);
// console.log(BMW);

const someCar = new Car(100);
someCar.turnOn();
someCar.accelerate(100)
someCar.drive(2);
console.log(someCar);
Car.getSpecs(someCar);

/*
  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.
  
  Использование будет выглядеть следующим образом:
  
  const someCar = new Car(100);
  someCar.turnOn();
  someCar.drive(2);
  
  Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
*/


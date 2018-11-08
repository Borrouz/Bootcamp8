'use strict'

//events

// 1. click
// 2. submit
// 3. focus для работы с активным inputю происходит когда клацаем на input
// 4. blur потеря фокуса
// 5. keydown когда нажимаем кнопку на клавиатуре и держим происходит что-то.
// 6. keyup активируется когда мы отпускаем кнопку
// 7.keypress default состояние кнопки до ее нажатия
// 8.input активируется когда в  любом input что-то меняется
// 9.onChange реагирует на изменение в конкретном input
// 10.scroll активируемся когда мы прокручиваем сайт
// DOMContentLoaded сделай функцию как только дорисуется doom дерево
// onbeforeunload запускается когда мы закрываем сайт

//подключение

// element.addEventListener('название события за которым хотим чтоб елемент следил', function(функция которую хотим выполнить))
// element.removeEventListener (-//-, -//-) удаляет ивент

let button = document.querySelector('#button');
// function Hello() {
//     alert('Hello user');
//     button.removeEventListener('click', Hello);
// }

// button.addEventListener('click', Hello);
// function eventInfo() {
//     console.log(event.target);                         //--------> поле event сохраняет все действия которые мы делали на страничке
// }                                                      // ----> target показывает с каким елементом мы запустили событие
// button.addEventListener('click', eventInfo);

// let sendDataBtn = document.querySelector('[type = "submit"]');
// let form = document.querySelector('#form')
// let lastName = document.querySelector('#lastName');
// let name = document.querySelector('#name');
// function readValue () {
//     event.preventDefault(); //-----> команда которая отменяет стандартное поведение елементов в браузере
//     console.log(name.value);
//     console.log(lastName.value);
//     // name.value = '';
//     // lastName.value = '';
//     form.reset(); // -----> зачищает все input в form
// };
// form.addEventListener('submit', readValue);

// event.stopPropagation(); // -------> прекращает всплытие клика



// 1) вводимо в метрах
// 2) Конвеотуємо в :
// 2.1) Сантиметри
// 2.2) Кілометри
// 2.3) Милі
// 2.4) Дюйти
// 2.5) фути
// 2.6) ярди

// let submit = document.querySelector('#button');
let metres = document.querySelector('#metres');
let centimeters = document.querySelector('#centimeters');
let form = document.querySelector('#form');
let kilometers = document.querySelector('#kilometers');
let miles = document.querySelector('#miles');
let inches = document.querySelector('#inches');
let feets = document.querySelector('#feets');
let yards = document.querySelector('#yards');
function MetrToCent () {
    console.log(event.target.name);
    if (event.target.name === 'metres'){
        centimeters.value = metres.value * 100;
        kilometers.value = metres.value/1000;
        miles.value = metres.value/1609,34;
        inches.value = metres.value*39,3701;
        feets.value = metres.value*3,28;
        yards.value = metres.value*1.09;
    } else if (event.target.name === 'centimeters') {
        metres.value = centimeters.value/100;
        kilometers.value = centimeters.value/100000;
        miles.value = centimeters.value/160934;
        inches.value = centimeters.value/2.54;
        feets.value = centimeters.value/30.48;
        yards.value = centimeters.value/91.44;   
    }else if (event.target.name === 'kilometers') {
        metres.value = kilometers.value*1000;
        centimeters.value = kilometers.value*100000;
        miles.value = kilometers.value*1.61;
        inches.value = kilometers.value*39370;
        feets.value = kilometers.value*3280.84;
        yards.value = kilometers.value*1093.61;
    };
};
form.addEventListener('input', MetrToCent);




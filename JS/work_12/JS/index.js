'use strict'

// let title = document.querySelector('.title');
// let text = document.querySelectorAll('p');
// console.log(title);
// console.log(text);

// let text =[...document.querySelectorAll('p')];
// let text2 = Array.from(document.querySelectorAll('p'));
// console.log(text);

// let ul = document.querySelector('.list');
// console.log(ul);
// console.log(ul.children);
// console.log(ul.parentNode);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// let text = document.querySelector('.par');
// console.log(text);
// console.log(text.classList.length);
// text.classList.add('big-text');
// text.classList.remove('par');
// text.classList.toggle('par');
// console.log(text.classList.contains('title'));

// const lnk = document.querySelector('.link');
// console.log(lnk);
// console.log(lnk.hasAttribute('href'));
// console.log(lnk.getAttribute('href'));//
// console.log(lnk.href);                //--------> два способа записи

// lnk.setAttribute('title', 'super link');
// lnk.setAttribute('id', 'idFromJs');
// lnk.removeAttribute('title');
// let li = document.querySelector('#one');
// console.log(li.dataset.info);


// let p = document.querySelector('.text');
// console.log(p.textContent);
//                                                     //--------- два способа
// let p = document.querySelector('.text').innerHTML;

// let ul = document.querySelector('.list');
// console.log(ul.textContent);
// console.log(ul.innerHTML);

// let mainTitle = document.createElement('h1');

// mainTitle.classList.add('text-align');


// Создание нового html элемента 
// let mainTitle = document.createElement('h1');
// mainTitle.classList.add('main-title');
// mainTitle.textContent = 'I am Title created from JS';
// console.log(mainTitle);

// // // ВСТАВКА В ШТМЛ НОВОГО созданного выше тега
// let container = document.querySelector('.container');
// container.append(mainTitle); // в самый конец контейнера вставляем элемент
// container.prepend(mainTitle); // в самое начало контейнера вставляем элемент
// container.before(mainTitle); // перед контейнером вставляем элемент
// container.after(mainTitle); // после контейнера вставляем элемент

// // СДЕЛАТЬ копию любого html тега и что то с ним делать
// let result = mainTitle.cloneNode(true); // let result = mainTitle.cloneNode(false);
// container.prepend(result);

// // Заменить один html элемент на другой
// let container = document.querySelector('.title');
// let h2 = document.querySelector('.title');
// h2.replaceWith(mainTitle);
// //Удаление елемента
// let list = document.querySelector('.list');
// list.remove();


// // Доступ к тому что пользователь написал в input
// let input = document.querySelector('.name');
// console.log(input.value); //------- value всегда создается при input


// // галочки и радиобаттоны
// let checkBox = document.querySelector('#box');
// console.log(checkBox);                            // информация приходит true если выбрана галочка и falce если нет. проеряем checked
// console.log(checkBox.checked);

// //изменение стилей

// let articleTitle = document.querySelector('h2');

// articleTitle.style.color = 'red';
// articleTitle.style.fontSize = '60px';
// console.log(articleTitle);

// создаем ссылку с атрибутом href вставить текст. контент и вставить в конец article
//первый способ
// let article = document.querySelector('article');
// // let a = document.createElement('a');
// // a.setAttribute('href', '#');
// // a.textContent = 'link';
// // article.append(a); // вставляет елемент в конец контейнера
// // второй способ
// let str = `<a href='#'>link</a>`;
// // article.innerHTML = str;   // всегда рисует новую разметку
// article.innerHTML+= str;  // все равно стирает h1 и p. и рисует заново



// Задание 1
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4

*/

// let animals = document.querySelectorAll('.categories > li');
// console.log(animals.forEach(el => console.log(el.firstChild.data.trim(), el.firstElementChild.childElementCount)));


// Задание 2

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// let list = document.querySelectorAll('.list > li');
// list[0].style.color = 'red';
// list[list.length-1].style.color = 'blue';

// Задание 3
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let list = document.querySelector('.list');
// elements.map(el => {
//     let li = document.createElement('li');
//     li.textContent = el;
//     list.append(li);
// });

//Задании 4 

/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
// let list = document.createElement('ul');
// let prom;
// do {
// prom = prompt('');
// let li = document.createElement('li');
// li.textContent = prom;
// list.append(li);
// } while (prom !== null);
// document.body.append(list)


// Задание 5


/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let a = document.querySelectorAll('inputs');
// let inputs = Array.from(a);

// let getInputsData = function (inputs) {
//   let newArr = [];
//   inputs.filter(el => el.checked === true ? newArr.push(el) : null);
//   return newArr;
// }







//BOM

// console.log(navigator); // инфа о железе
// console.log(navigator.userAgent);// все браузеры которые у меня установлены
// console.log(navigator.vendor);// с какого браузера я зашел
// console.log(window.screen); // размеры экрана с которого сидим
// console.log(window.screen.width);// ширина экрана

function showLocation(position) {
  console.log(position);  
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  alert("Latitude : " + latitude + " Longitude: " + longitude);
}

function errorHandler(err) {
  if(err.code == 1) {
     alert("Error: Access is denied!");
  } else if( err.code == 2) {
     alert("Error: Position is unavailable!");
  }
}

function getLocation() {

  if(navigator.geolocation) {

     navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
  } else {
     alert("Sorry, browser does not support geolocation!");
  }
}

getLocation();

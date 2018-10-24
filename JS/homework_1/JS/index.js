'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let log = prompt('Your Login');
let cans = 'Отменено пользователем!';
let well = 'Добро пожаловать!';
let stop = 'Доступ запрещен!';
console.log(log);
if (log === null) {
    alert (cans);
}else if (log === adminLogin) {
    let pass = prompt('Your password');
    if (pass === null) {
        alert('Отменено пользователем!');
    } else if (pass === adminPassword) {
        alert(well);
    }else {
        alert(stop);
    }
}else  {
    alert (stop);
}






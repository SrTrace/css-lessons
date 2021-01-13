//Как найти?
// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

let tableTarget = document.getElementById('age-table');
console.log(tableTarget);

// let labelTarget = tableTarget.getElementsByTagName('label');
// console.log(labelTarget);
let labelTarget = tableTarget.querySelectorAll('#age-table label');
console.log(labelTarget);

// let tdTarget = tableTarget.rows[0].cells[0];
// console.log(tdTarget.innerHTML);
let tdTarget = tableTarget.getElementsByTagName('td')[0];
console.log(tdTarget.innerHTML);

// let formTarget = document.getElementsByName('search');
// console.log(formTarget);
let formTarget = document.querySelector('form[name="search"]');
console.log(formTarget);

let inputFirst = formTarget.querySelector('input');
console.log(inputFirst);

let inputLast = formTarget.querySelectorAll('input'); // ищет все iput
console.log(inputLast[inputLast.length-1]);
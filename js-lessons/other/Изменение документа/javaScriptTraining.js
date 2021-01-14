//Создание сообщения

let  div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

//Методы вставки (могут использоваться только для вставки DOM-узлов или текстовых фрагментов)

//document.body.append(div); // добавляет узлы или строки в конец node
document.body.prepend(div); // добавляет узлы или строки в начало node
//document.body.replaceWith(div); // заменяет узлы  node заданными узлами или строками

let textNode = document.createTextNode('before'); // Создаёт новый текстовый узел с заданным текстом
// не работает document.body.lastElementChild(oderList).before(textNode); // вставить строку 'before' перед ol
oderList.before(textNode); // вставить строку 'before' перед ol
oderList.after('after'); // вставить строку 'before' после ol

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
oderList.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
oderList.append(liLast); // вставить liFirst в конец <ol>

// вставка HTML с тегами и прочим (как elem.innerHTML)

inHtml.insertAdjacentHTML('beforebegin', '<p>Hi there, people!</p>');
inHtml.insertAdjacentHTML('afterbegin', '<p>Yo, people!</p>');
inHtml.insertAdjacentHTML('beforeend', '<p> Howdy you?</p>');
inHtml.insertAdjacentHTML('afterend', '<p> By-by!</p>');

// альтернативный вариант показа сообщения
document.body.insertAdjacentHTML("beforeend", `<div class="alert">
    <strong>Всем привет!</strong> Вы прочитали важное сообщение в конце.
  </div>`);

// Удаление узлов (удалим созданное вначале Важное сообщение

setTimeout(() => div.remove(), 1000);

// Клонирование узлов: cloneNode

// let message2 = message.cloneNode(true); // клонировать сообщение
// message2.querySelector('strong').innerHTML = ('Всем пока!'); // изменить клонированный элемент
//
// message.after(message2); // показать клонированный элемент после существ-го

// Возращаем массив узлов вместо DocumentFragment

function getListContent() {
    let result = [];

    for(let i=1; i<=3; i++) {
        let li = document.createElement('li');
        li.append(i);
        result.push(li);
    }

    return result;
}

ul.append(...getListContent()); // append + оператор "..." = друзья!

// Задача Создайте список/////////

let ulList = document.createElement('ul');
ulList.id = 'autoListClass';
message.before(ulList); // вставляем созданный ul перед div c id='message'

function getWishList() {
    let userList = []; // Массив для хранения введеных данных

    while (true) {
            let userItem = prompt('Create your list'); // Получение данных от пользователя
            if (userItem===null || userItem==="") break; // Проверка когда прерывать процесс ввода данных
            let liElem = document.createElement('li'); // создание  елемента li и присвоение переменной
            liElem.append(userItem); // вставляем данные введеные пользователем в созданный элемент li
            userList.push(liElem); // перемещаем созданный эл-т с данными в конец массива
        }
    return userList; // возращаем заполненный массив функции getWishList
}

autoListClass.append(...getWishList()); // размещаем ноды полученные функцией в конец  созданного ul
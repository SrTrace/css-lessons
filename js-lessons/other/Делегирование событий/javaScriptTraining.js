//1. Вешаем обработчик на контейнер
let table = document.getElementById('bagua-table');

let selectedTd;

table.onclick = function(event) {
    let td = event.target.closest('td'); //Метод elem.closest(selector) возвращает ближайшего предка,
    // соответствующего селектору. В данном случае нам нужен <td>, находящийся выше по дереву от исходного
    // элемента.

//2. В обработчике проверяем исходный элемент event.target

    if (!td) return; //Если event.target не содержится внутри элемента <td>, то вызов вернёт null,
    // и ничего не произойдёт.

    if (!table.contains(td)) return; // Если таблицы вложенные, event.target может содержать элемент <td>,
    // находящийся вне текущей таблицы. В таких случаях мы должны проверить,
    // действительно ли это <td> нашей таблицы.

    highlight(td); // И если это так, то подсвечиваем его
}
//3. Если событие произошло внутри нужного нам эл-та, обрабатываем его
function highlight(td) {
    if (selectedTd) { // убрать существующую подсветку, если есть
        selectedTd.classList.remove('highlight');  //ТУТ НЕ ПОНИМАЮ!!!!!!!!!!!
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // подсветить новый td
}
/////////////////////////////////////////////////////////////////////////
// Обработчик считывает содержимое атрибута и выполняет метод

class Menu {
    constructor(elem) {
        this._elem = elem; // Не понятно!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        elem.onclick = this.onClick.bind(this); // (*)
        //метод this.onClick в строке, отмеченной звёздочкой (*),
        // привязывается к контексту текущего объекта this. Это важно,
        // т.к. иначе this внутри него будет ссылаться на DOM-элемент (elem),
        // а не на объект Menu, и this[action] будет не тем, что нам нужно.
    }

    save() {
        alert('сохраняю');
    }

    load() {
        alert('загружаю');
    }

    search() {
        alert('ищу');
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(soup);
//////////////////////////////////////////////////////////////////////////////
//Поведение: «Счётчик»

document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // если есть атрибут...
        event.target.value++;
    }

});
//////////////////////////////////////////////////////////////////////////////
// Поведение: Переключатель (Toggle)

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
});
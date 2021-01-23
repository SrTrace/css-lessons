// Добавьте пункт к выпадающему списку

// Выведите значение и текст выбранного пункта.
let selectedOption = genres.options[genres.selectedIndex]; // индекс выбранного option selected в html

console.log("Значение выбранного пункта: " + selectedOption.value);
console.log("Текст выбранного пункта: " + selectedOption.text);

// Добавьте пункт: <option value="classic">Классика</option>.

let newOption = new Option("Классика", "classic");
console.log(newOption);
genres.append(newOption);

// Сделайте его выбранным.

newOption.selected = true;

/////////////// Редактируемый div /////////////////
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
//
// <textarea> позволяет редактировать HTML в элементе <div>.
//
// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>,
// и его содержимое становится HTML-кодом в <div>.
let area = null;
let view = document.getElementById('view');

view.onclick = function () {
    editStart();
};

function editStart() {
    area =  document.createElement('textarea');
    area.className = "edit";
    area.value  = view.innerHTML;

    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    area.onblur = function () {
        editEnd();
    };

    view.replaceWith(area);
    area.focus();
}

function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
}

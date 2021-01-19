// Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
//
//     При клике на элемент списка выделяется только этот элемент (добавляется класс .selected),
//     отменяется выделение остальных элементов.
//     Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе,
//     но остальные элементы при этом не изменяются.


let markedList = document.getElementById('ul');

markedList.onclick = function (event) {
    if (event.target.tagName !=="LI") return; // только в верхнем регистре LI

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }

}
// предотвращает ненужное выделение элементов списка при клике
markedList.onmousedown = function () {
    return false;
}

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = markedList.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}

// Реализовать функцию подсветки нажимаемых клавиш
//
// #### Технические требования:
// - В файле `index.html` лежит разметка для кнопок.
// - Каждая кнопка содержит в себе название клавиши на клавиатуре
// - По нажатию указанных клавиш - та кнопка, на которой написана эта буква,
// должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже
// ранее была окрашена в синий цвет - она становится черной.
// Например по нажатию `Enter` первая кнопка окрашивается в синий цвет.
// Далее, пользователь нажимает `S`, и кнопка `S` окрашивается в синий цвет,
// а кнопка `Enter` опять становится черной.

const btn = document.querySelectorAll('.btn');

document.addEventListener('keydown', changeColor);

btn.forEach(function (elem) {
    elem.addEventListener('click', changeColorByClick);
});

function changeColor(event) {
    for (let item of btn) {
        if (item.getAttribute('data-key') === event.code) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    }
}

function changeColorByClick(event) {
    event.target.classList.add('active');
    for (let item of btn) {
        if (item !== event.target) {
            item.classList.remove('active');
        }
    }
}
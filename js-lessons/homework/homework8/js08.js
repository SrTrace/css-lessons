// Создать поле для ввода цены с валидацией.
//
//     #### Технические требования:
// - При загрузке страницы показать пользователю поле ввода (`input`) с надписью `Price`.
// Это поле будет служить для ввода числовых значений
// - Поведение поля должно быть следующим:
//     - При фокусе на поле ввода - у него должна появиться рамка зеленого цвета.
//     При потере фокуса она пропадает.
// - Когда убран фокус с поля - его значение считывается, над полем создается `span`,
// в котором должен быть выведен текст: `Текущая цена: ${значение из поля ввода}`.
// Рядом с ним должна быть кнопка с крестиком (`X`). Значение внутри поля ввода окрашивается в зеленый цвет.
// - При нажатии на `Х` - `span` с текстом и кнопка `X` должны быть удалены.
// Значение, введенное в поле ввода,обнуляется.
// - Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой,
// под полем выводить фразу - `Please enter correct price`. `span` со значением при этом не создается.

const input = document.getElementById("numVal");
const form = document.getElementById("priceForm");

function checkInputValue(value) {
    return !(/\D/.test(value) || /\D/.test(value) < 0);
};

function addSpanOk(value) {
    const success = `
<div>
    <span>Текущая цена: ${value}</span>
    <button>[x]</button>
</div>
`;
    const root = document.createElement("div");
    root.innerHTML = success;
    form.prepend(root);
};

function addSpanErr() {
    form.append(err);
};

input.addEventListener('change', function (e) {
    const value = e.target.value;
    if (checkInputValue(value)) {
        console.log("Успех!!!");
        err.remove();
        addSpanOk(value);
    } else {
        console.log("Неудача!!!");
        addSpanErr();
    }
});

const err = document.createElement('p');
err.innerText = "Please enter correct price";
const success = `
<div>
    <span>Текущая цена: ${value}</span>
    <button>[x]</button>
</div>
`;

// //  Массив для хранения всех введенных значений
// let pricesFromInput = [];
// // Переменная для работы тегом <span>
// let spanPrice = document.createElement('span'); // или const?
//
// // Проверка значения в поле input
// function checkInputValue(value) {
//     pricesFromInput.push(value); // добавляем введенное значение в массив pricesFromInput
//     let errInput = document.querySelector('#numVal'); // присв-е переменное input
//     if (/\D/.test(value) || /\D/.test(value) < 0 )  { //регулярное выражение если не целое цисло или < 0
//         console.log(`Please enter correct price ` + value); // должена быть фраза под полем
//         //css err добавляем класс для неверного значения (красная рамка)
//         errInput.classList.add('err');
//        // console.log(errInput);
//          return false;
//     } else {
//         console.log(`Correct ` + value);
//         errInput.classList.remove('err'); // удаляем класс т.к значение верное
//        // console.log(errInput);
//          return true;
//     }
// };
//
//
// // Создаем <span> для  вывода на экран текущей цены
// function createSpanTag(value) {
//     //let spanPrice = document.createElement('span');
//     spanPrice.className = 'currentPrice'; // добавляем класс для css и позиционирования
//     spanPrice.innerHTML = `Текущая цена: ${value}`; // считываем значение после фокуса
//     // Создаем кнопку для удаления <span>  с введеным значением.
//     // Кнопка [x] становится первым потомком span (spanPrice)
//     spanPrice.insertAdjacentHTML("beforeend", '<button class="remove-button">[x]</button>');
//     // Выводим <span> с кнопкой х над полем ввода (без позиционирования)
//      priceForm.prepend(spanPrice);  // Вставляем <span> в поле input
//     let coordsInput = numVal.getBoundingClientRect();
//     console.log(coordsInput);
//     spanPrice.style.top = coordsInput.top + "px";  // позиционирование относительно поля input
//     spanPrice.style.left = coordsInput.left + "px";
// };
//
// // Удаляем <span> с текущей ценой
// function removeSpanTag() {
//     spanPrice.remove();
//     //this.value = ''; // не понятно почему удаляет input.value
// };
//
// // После ввода в поле input, когда убран фокус начинаетс обработка значения в поле инпут
// numVal.onchange = function () {
//     //event.preventDefault()  // Вставить куда-то нужно!!!!!!!!!!!!!!!!! Предотвратить отправку формы
//     if (checkInputValue(this.value) === false) return;
//     console.log(pricesFromInput); // после сброса <span> кнопкой button массив обнуляется. Почему?
//
//     // Cоздаем тег span c кнопкой
//     createSpanTag(this.value);
//
//     // Удаление <span> и обнуление значение в поле ввода
//     priceForm.firstChild.firstChild.onclick = removeSpanTag;
//     // .addEventListener("click", имя функции) попробовать
// };
//
// console.log(pricesFromInput);
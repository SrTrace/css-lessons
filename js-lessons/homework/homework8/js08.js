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
const formCenter = document.querySelector(".center");
const err = document.createElement('div');
err.innerText = "Please enter correct price";
err.classList.add('errValue');

function checkInputValue(value) {
    return !(/\D/.test(value) || /\D/.test(value) < 0);
}

function addSpanOk(value) {
    const success = `
    <div class="currentPriceValue">
    <span>Текущая цена: ${value}</span>
    <button class = "remove-button">x</button>
    </div>
`;
    const root = document.createElement("div");
    root.innerHTML = success;
    root.classList.add('blockSpan');
    formCenter.prepend(root);
}

function addSpanErr() {
    formCenter.append(err);
}

function clearInputField() {
    const a = document.querySelector('.currentPriceValue');
    const b = document.querySelector('.blockSpan');
    const c = document.querySelector('.errValue');
    if (a, b) {
       a.remove();
       b.remove();
    }
    else if (c)  {
        err.remove();
        input.classList.remove('err');
    }
}

input.addEventListener('blur', function (e) { 
    clearInputField();
    const value = e.target.value;
    if (value.length == 0) return;
    if (checkInputValue(value)) {
        console.log("Успех!!!");
        err.remove();
        input.classList.remove('err');
        addSpanOk(value);
    } else {
        console.log("Неудача!!!");
        input.classList.add('err');
        addSpanErr();
    }
});
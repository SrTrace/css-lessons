// Написать реализацию кнопки "Показать пароль".
//     #### Технические требования:
//     - В файле `index.html` лежит разметка для двух полей ввода пароля.
// - По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, иконка меняет свой внешний вид.
// - Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль)
// - Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль)
// - По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях
// - Если значения совпадают - вывести модальное окно (можно alert) с текстом - `You are welcome`;
// - Если значение не совпадают - вывести под вторым полем текст красного цвета  `Нужно ввести одинаковые значения`
// - После нажатия на кнопку страница не должна перезагружаться
// - Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.

const iconClick = document.querySelectorAll('.icon-password');
const input = document.querySelectorAll('.checkPassword');
const btn = document.querySelector('.btn');

iconClick.forEach(function (elem) {
    elem.addEventListener('click', changeIcon);
});

btn.addEventListener('click', function () {
    this.disabled = true;
    checkInputValue();
})

function changeIcon(e) {
    if (e.target.classList.contains('fa-eye') == true) {
        console.log('eye');
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
    } else if (e.target.classList.contains('fa-eye-slash') == true) {
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye');
        console.log('eye-slash');
    }
    changeInputType(e);
}

function changeInputType(e) {
    let input = e.target.previousElementSibling;
    if (input.type == 'password') {
        input.type = 'text';
        console.log(input);
    } else if (input.type == 'text') {
        input.type = 'password';
        console.log(input);
    }
}

function checkInputValue() {
    let arrValue = [];
    for (let i = 0; i < input.length; i++) { //add -1 for bottom code
        arrValue.push(input[i].value);
        // for (let j = i + 1; j < input.length; j++) {
        //     arrValue.push(input[j].value);
        //     if (arrValue[i] === arrValue[j]) {
        //         console.log('right');
        //     } else {
        //         console.log('wrong');
        //     }
        // }
    }
    if (arrValue[0] === arrValue[1]) {
        console.log('right');
    } else {
        console.log('wrong');
    }
    console.log(arrValue);
}


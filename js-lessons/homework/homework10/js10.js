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
const modalOk = document.querySelector('.modal.Ok');
const modalErr = document.querySelector('.modal.Err');
const modalBtnClose = document.querySelectorAll('.close');

iconClick.forEach(function (elem) {
    elem.addEventListener('click', changeIcon);
});

btn.addEventListener('click', function (event) {
    //this.disabled = true;
    event.preventDefault(); // how to prove??
    checkInputValue();
})

modalBtnClose.forEach(function (elem) {
    elem.addEventListener('click', function () {
        clearModal();
    });
});


function changeIcon(e) {
    if (e.target.classList.contains('fa-eye') === true) {
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
    } else if (e.target.classList.contains('fa-eye-slash') === true) {
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye');
    }
    changeInputType(e); // or add one more addEventListener?
}

function changeInputType(e) {
    let input = e.target.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
    } else if (input.type === 'text') {
        input.type = 'password';
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
        //   modalOk.style.visibility = 'visible';
        //     } else {
        //         console.log('wrong');
        //   modalErr.style.visibility = 'visible';
        //     }
        // }
    }
    let emptyStr = " ";

    if (arrValue[0] === arrValue[1] && arrValue[0].length >3) {
        console.log('right');
        modalOk.style.visibility = 'visible';
    } else {
        console.log('wrong');
        modalErr.style.visibility = 'visible';
    }
    console.log(arrValue);
}

function clearModal() {
    if (modalOk.style.visibility === 'visible') {
        modalOk.style.visibility = 'hidden';
    } else if (modalErr.style.visibility === 'visible') {
        modalErr.style.visibility = 'hidden';
    }
}
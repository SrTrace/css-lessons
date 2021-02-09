// Реализовать возможность смены цветовой темы сайта пользователем.
// #### Технические требования:
// - Взять любое готовое домашнее задание по HTML/CSS.
// - Добавить на макете кнопку "Сменить тему".
// - При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение.
// При повтором нажатии - возвращать все как было изначально - как будто для страницы
// доступны две цветовых темы.
// - Выбранная тема должна сохраняться и после перезагрузки страницы

// Code for homework12
const btnStart = document.querySelector('.start'),
    btnStop = document.querySelector('.stop'),
    images = document.querySelectorAll('.image-to-show'),
    spanTimer = document.querySelector('.timer');

btnStart.addEventListener('click', startBannerShow);
let startShow = Date.now() / 1000;
let times = [];
let timerSec;

function printSecLeft(from, to) {
    let current = from;
    spanTimer.innerHTML = `Next image in: ${current} sec`;
    timerSec = setTimeout(function leftSec() {
        --current;
        if (current > 0) spanTimer.innerHTML = `Next image in: ${current} sec`;
        if (current >= 1) {
            timerSec = setTimeout(leftSec, 1000);
        }
        console.log(current);
    }, 1000);
}

//printSecLeft(9, 1); // second arg did'not used!

function BannerShow() {
    let timerId = setInterval(function () {
        images.forEach(function (elem) {
            if (elem.style.zIndex === '900') {
                elem.style.zIndex = '600';
            } else {
                elem.style.zIndex = `${Number(elem.style.zIndex) + 100}`;
            }
        });

        printSecLeft(9, 1);

        times.push(Math.floor(Date.now() / 1000 - startShow));
        console.log(times);
    }, 10000);


    btnStop.addEventListener('click', function () {
        stopBannerShow(timerId);
    });
}

function startBannerShow() {
    spanTimer.style.visibility = "visible";
    printSecLeft(9, 1);
    BannerShow();
}

function stopBannerShow(value) {
    clearInterval(value);
    clearTimeout(timerSec);
    spanTimer.style.visibility = "hidden";
    times.length = 0;
}

startBannerShow();
/////////////////////////////////////////////////////////
//  Theme  change code
////////////////////////////////////////////////////////

const link = document.getElementById("theme");
const btnTheme = document.querySelector(".theme");

let store = localStorage.getItem("href");
console.log(store);
if ( store !== null) {
    store = link.setAttribute("href", store);
}

btnTheme.addEventListener("click",function () {
    let current = link.getAttribute("href");
    //console.log(current);
    if (current == "cssLightTheme13.css") {
        current = "cssDarkTheme13.css";
    } else {
        current = "cssLightTheme13.css";
    }

    link.setAttribute("href", current);
    localStorage.setItem("href",current);
})
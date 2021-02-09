// Реализовать программу, показывающую циклично разные картинки.
//
//     #### Технические требования:
//     - В папке `banners` лежит HTML код и папка с картинками.
// - При запуске программы на экране должна отображаться первая картинка.
// - Через 10 секунд вместо нее должна быть показана вторая картинка.
// - Еще через 10 секунд - третья.
// - Еще через 10 секунд - четвертая.
// - После того, как покажутся все картинки - этот цикл должен начаться заново.
// - При запуске программы где-то на экране должна появиться кнопка с надписью `Прекратить`.
// - По нажатию на кнопку `Прекратить` цикл завершается, на экране остается показанной та картинка,
// которая была там при нажатии кнопки.
// - Рядом с кнопкой `Прекратить` должна быть кнопка `Возобновить показ`,
// при нажатии которой цикл продолжается с той картинки, которая в данный момент показана на экране.
// - Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
//
//     #### Не обязательное задание продвинутой сложности:
//     - При запуске программы на экране должен быть таймер с секундами и миллисекундами,
//     показывающий сколько осталось до показа следующей картинки.
// - Делать скрытие картинки и показывание новой картинки постепенным (анимация fadeOut / fadeIn)
// в течение 0.5 секунды.

const btnStart = document.querySelector('.start'),
    btnStop = document.querySelector('.stop'),
    images = document.querySelectorAll('.image-to-show'),
    spanTimer = document.querySelector('.timer');

btnStart.addEventListener('click', startBannerShow);
let startShow = Date.now()/1000;
let times = [];
spanTimer.innerHTML = "";
let timerSec;

function  printSecLeft(from,to) {
    let current = from;
    spanTimer.innerHTML = `Next image in: ${current} sec`;
    timerSec = setTimeout(function leftSec () {
        --current;
        if (current > 0) spanTimer.innerHTML = `Next image in: ${current} sec`;
        if (current >= 1) {
            timerSec =  setTimeout(leftSec,  1000);
        }
        console.log(current);
    }, 1000);
}

printSecLeft(9,1); // second arg did'not used!

function startBannerShow() {
    let timerId = setInterval(function () {
        images.forEach(function (elem) {
            if (elem.style.zIndex === '900') {
                elem.style.zIndex = '600';
            }
            else {
                elem.style.zIndex = `${Number(elem.style.zIndex) + 100}`;
            }
        });

        // function  printSecLeft(from, to) {
        //     let current = from;
        //     spanTimer.innerHTML = `Next image in: ${current} sec`;
        //     timerSec = setTimeout(function leftSec () {
        //         if (current > 0) spanTimer.innerHTML = `Next image in: ${current} sec`;
        //         if (current >= 1) {
        //             timerSec =  setTimeout(leftSec,  1000);
        //         }
        //         current--;
        //         console.log(current);
        //     }, 1000);
        // }

        printSecLeft(9, 1);

        times.push(Math.floor(Date.now()/1000 - startShow));
        console.log(times);
    }, 10000);



    btnStop.addEventListener('click', function () {
        stopBannerShow(timerId);
    });
}

function stopBannerShow(value) {
    clearInterval(value);
    clearTimeout(timerSec);
    spanTimer.innerHTML = "";
    times.length = 0;
}

startBannerShow();
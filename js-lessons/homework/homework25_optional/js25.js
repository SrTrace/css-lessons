// ## Задание
//
// Реализовать слайдер на чистом Javascript.
//
//     #### Технические требования:
//     - Создать HTML разметку, содержащую кнопки `Previous`, `Next`, и картинки (6 штук),
//     которые будут пролистываться горизонтально.
// - На странице должна быть видна только одна картинка. Слева от нее будет кнопка `Previous`,
// справа - `Next`.
// - По нажатию на кнопку `Next` - должна появиться новая картинка, следующая из списка.
// - По нажатию на кнопку `Previous` - должна появиться предыдущая картинка.
// - Слайдер должен быть бесконечным, т.е. если в начале нажать на кнопку `Previous`,
// то покажется последняя картинка, а если нажать на `Next`, когда видимая - последняя картинка,
// то будет видна первая картинка.
// - Пример работы слайдера можно увидеть [здесь](http://kenwheeler.github.io/slick/) (первый пример).

let slides = document.querySelectorAll(".slide-single");
console.log(slides);
// const imgCss = document.querySelector('.slide-single');
// let compStyle = getComputedStyle(imgCss).left;
// console.log(compStyle);
// console.log(imgCss);

let slider = [];
for (let i=0; i< slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i] .remove();
}
console.log(slider);

let step = 0;
let offset = 0;

console.log(offset);

function draw() {
    let img = document.createElement("img");
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset*400 +'px';
    console.log(img.style.left);
    document.querySelector(".images-wrapper").appendChild(img);
    if (step +1 === slider.length ) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

function left() {
    document.onclick = null;
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i=0; i< slides2.length;  i++) {
        slides2[i] .style.left = offset2*400 - 400 + "px";
        offset2++;
    }
    setTimeout(function () {
        slides2[0].remove();
        draw();
        document.onclick = left;
    }, 1000);
}
draw();draw();
document.onclick = left;


/////////////////////////////////////////////////////////
//  Theme  change code
////////////////////////////////////////////////////////

const link = document.getElementById("theme");
const btnTheme = document.querySelector(".theme");

// let store = localStorage.getItem("href");
// console.log(store);
// if (store !== null) {
//     store = link.setAttribute("href", store);
// }

btnTheme.addEventListener("click", function () {
    let current = link.getAttribute("href");
    //console.log(current);
    if (current === "cssLightTheme25.css") {
        current = "cssDarkTheme25.css";
    } else {
        current = "cssLightTheme25.css";
    }

    link.setAttribute("href", current);
    // localStorage.setItem("href", current);
})
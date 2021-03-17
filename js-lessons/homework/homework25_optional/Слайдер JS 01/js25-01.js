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

const images = document.querySelectorAll(".slide-single");
const slidePointer = document.querySelectorAll(".viewSlide");

const imageSrc = [];
for (let i = 0; i < images.length; i++) {
    imageSrc.push(images[i].src);
    images[i].remove();
}

// let step = 0;
// let offset = 0;

const frame = document.querySelector(".slideFrame");

function init() {
    offset = -1;
    for (let pos = 0; pos < 3; pos++) {
        let slide = document.createElement("img");
        slide.classList.add("slide-single");
        if (pos === 0) {
            slide.src = imageSrc[imageSrc.length - 1];
            slide.dataset.index = `${imageSrc.length - 1}`;
        } else {
            slide.src = imageSrc[pos - 1];
            slide.dataset.index = `${pos - 1}`;
        }
        slide.style.left = offset * 400 + 'px';
        frame.appendChild(slide);
        offset++;
    }
}

init();

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let disabledClick = false;

btnNext.addEventListener("click", function (event) {
    event.stopPropagation();
    if (disabledClick === true) {
        return false;
    }
    disabledClick = true;
    setTimeout(function () {
        disabledClick = false;
    }, 1000);
    left();
});

btnPrev.addEventListener("click", function (event) {
    event.stopPropagation();
    if (disabledClick === true) {
        return false;
    }
    disabledClick = true;
    setTimeout(function () {
        disabledClick = false;
    }, 1000);
    right();
});

function left() {
    const slides = document.querySelectorAll(".slide-single");
    let nextPos=0;
    slides.forEach(function (item) {
        let leftAttr = item.style.left;
        if (leftAttr === "-400px") {
            item.remove();
        } else if (leftAttr === "0px") {
            item.style.left = "-400px";
        } else if (leftAttr === "400px") {
            item.style.left = "0px";
            nextPos = Number(item.dataset.index) + 1;
        }
    });
    let slide = document.createElement("img");
    slide.classList.add("slide-single");
    if (nextPos > imageSrc.length - 1) {
        nextPos = 0;
    }
    slide.src = imageSrc[nextPos];
    slide.dataset.index = `${nextPos}`;
    slide.style.left = 400 + 'px';
    frame.appendChild(slide);
    showSlidePointer(slides);
}

function right() {
    const slides = document.querySelectorAll(".slide-single");
    let nextPos=0;
    for (let i = 2; i >= 0; i--) {
        let leftAttr = slides[i].style.left;
        if (leftAttr === "400px") {
            slides[i].remove();
        } else if (leftAttr === "0px") {
            slides[i].style.left = "400px";
        } else if (leftAttr === "-400px") {
            slides[i].style.left = "0px";
            nextPos = Number(slides[i].dataset.index) - 1;
        }
    }
    let slide = document.createElement("img");
    slide.classList.add("slide-single");
    if (nextPos < 0) {
        nextPos = imageSrc.length - 1;
    }
    slide.src = imageSrc[nextPos];
    slide.dataset.index = `${nextPos}`;
    slide.style.left = -400 + 'px';
    frame.appendChild(slide);
    showSlidePointer(slides);
}

function showSlidePointer(slides) {
    let slideIndex;
    slides.forEach(item => {
        let leftPosition = item.style.getPropertyValue("left");
        if (leftPosition === "0px") {
            slideIndex = item.dataset.index;
        }
    });
    slidePointer.forEach(pointer => {
        pointer.classList.remove("active");
        if (pointer.dataset.pos === slideIndex) {
            pointer.classList.add("active");
        }
    });


}


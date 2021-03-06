const wrapper = document.querySelectorAll(".wrapper");
const div = document.querySelector(".startProcess");
const btn = document.querySelector(".btn");

const bubbleField = document.createElement("div");
let bubble = document.createElement("span");


const inputDiam = document.createElement("input");
inputDiam.classList.add("hidden");
inputDiam.setAttribute("placeholder", "Введите  число от 0 до 50");
div.append(inputDiam);

let diameter;
let bubbles;
let flag;

btn.addEventListener("click", checkInputField);
inputDiam.addEventListener("change", checkInputData);
btn.addEventListener("click", reportWrongValue);

function checkInputField() {
    //ищем поле ввода на странице, если нет, то добавляем и дейсвуем дальше
    if (inputDiam.matches(".hidden")) {
        inputDiam.classList.toggle("hidden");
        console.log("input has been hidden");
    } else {
        console.log("input on screen");
    }
}

function checkInputData() {
    // если поле не пустое и введены цифры (больше 5 и меньше  150) - ок, иначе (данные не корректны)
    if (Number(this.value) && this.value > 4 && this.value < 151) {
        console.log("Вы ввели " + this.value);
        flag = true;
        btn.addEventListener("click", drawCircles);
        diameter = this.value;
    }
    else if (this.value.length === 0) {
        console.log("empty field");
        flag = false;
    }
    else {
        console.log( this.value);
        console.log("Неверные значения!");
        flag = false;
    }
}

function reportWrongValue() {
    if  (flag === false) {
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Попробуйте еще  раз</strong> Вы ввели неверные значения!";

        document.body.firstElementChild.prepend(div);
        setTimeout(() => div.remove(), 2000);
    }
}

function drawCircles() {
    if (flag === false) return;
    // draw circles 10*10 with diameter
    bubbleField.classList.add("circle-wrapper");
    div.after(bubbleField);

    clearBubbleField();

    for (let i = 0; i <= 100; i++) {
        if (i !== 100) {
            bubble = document.createElement("span");
            bubble.classList.add("circle");
            bubbleField.insertAdjacentElement("beforeend", bubble);
            //add random color
            bubble.style.backgroundColor = getRandomColor(256);
            // set diameter for width and height
            bubble.style.width = `${diameter}px`;
            bubble.style.height = `${diameter}px`;
        }
    }
    bubbles = document.querySelectorAll(".circle");
    bubbles.forEach(function (element) {
        element.addEventListener("click", function () {
			jQuery(this).fadeOut(300, function(){jQuery(this).remove();});
        });
    });
}

function clearBubbleField() {
    let bubs = document.querySelectorAll(".circle");
    bubs.forEach((elem) => elem.remove());
}

function getRandomColor(v) {
    let num = Math.floor(Math.random() * v) + "," + Math.floor(Math.random() * v) + "," + Math.floor(Math.random() * v);
    return `rgb(${num})`;
}
const numbers = document.querySelectorAll(".black");
const operators = document.querySelectorAll(".pink");
const calc = document.querySelector(".orange");
const display = document.querySelector(".display input");
const memory = document.querySelectorAll(".gray");
const displayDiv = document.querySelector(".display");

let strToCalc = "";
let result = 0;
let displayNumber = "";
let operatorFlag = false;
let countOperator = 0;
let memoryStack = 0;
let memoryFlag = false;

display.setAttribute("value", "0");
let iconMemory = document.createElement("div");
iconMemory.classList.toggle("icon-memory");
iconMemory.innerText = "M";
displayDiv.prepend(iconMemory);

function checkDisplay() {
    if (operatorFlag === true) {
        displayNumber = ""
        display.setAttribute("value", "");
        operatorFlag = false;
    }
}

numbers.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (this.value === "C") {
            strToCalc = "";
            displayNumber = "";
            display.setAttribute("value", "0");
            operatorFlag = false;
        } else if (this.value === "0") {
            if (strToCalc.length > 1 && strToCalc[1] !== ".") {
                strToCalc = strToCalc.slice(1, strToCalc.length);
                operatorFlag = false;
            }
        } else {
            checkDisplay();
            strToCalc += this.value.toString();
            displayNumber += this.value;
            display.setAttribute("value", displayNumber);
            // console.log(strToCalc);
        }
    });
});

// document.addEventListener('keydown', function (event) {
//     console.log("keyboard: " + event.code + " " + event.key);
//     if (event.key.match("(?<=^| )\\d+(\\.\\d+)?(?=$| )|(?<=^| )\\.\\d+(?=$| )")) {
//         if (event.key === "Delete") {
//             strToCalc = "";
//             displayNumber = "";
//             display.setAttribute("value", "0");
//             operatorFlag = false;
//         } else if (event.key == 0) {
//             if (strToCalc.length > 1 && strToCalc[1] !== ".") {
//                 strToCalc = strToCalc.slice(1, strToCalc.length);
//                 operatorFlag = false;
//             }
//         } else {
//             checkDisplay();
//             strToCalc += event.key.toString();
//             displayNumber += event.key;
//             display.setAttribute("value", displayNumber);
//
//         }
//     }
// });

operators.forEach(function (elem) {
    elem.addEventListener("click", function () {
        countOperator++;
        // console.log(countOperator);
        strToCalc += this.value.toString();
        operatorFlag = true;
        // console.log(strToCalc);
        if (countOperator > 1) {
            // console.log(strToCalc);
            // console.log(countOperator);
            let tempStr = strToCalc.slice(0, -1);
            // console.log(strToCalc);
            // console.log(tempStr);
            result = eval(tempStr);
            displayNumber = result;
            display.setAttribute("value", displayNumber);
            // console.log(result);
        }
    });
});

calc.addEventListener("click", function () {
    result = eval(strToCalc);
    displayNumber = result;
    display.setAttribute("value", displayNumber);
    //console.log(result);
    strToCalc = result;
});

memory.forEach(function (elem) {
    elem.addEventListener("click", function () {
        let memBtn = this.getAttribute("value");
        if (memBtn === "m-" || memBtn === "m+") {
            // console.log(memBtn);
            // console.log("m in left conner");
            iconMemory.classList.add("icon-memory-active");
            memoryStack = eval(strToCalc);
        }
        if (memBtn === "mrc") {
            if (memoryFlag === false) {
                // console.log(memBtn);
                // console.log("m in left conner");
                iconMemory.classList.remove("icon-memory-active");
                display.setAttribute("value", memoryStack);
                strToCalc += memoryStack;
                memoryFlag = true;
            } else {
                memoryStack = 0;
                //display.setAttribute("value", "");
                memoryFlag = false;
            }
        }
    });
});
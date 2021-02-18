// Реализовать функцию подсчета факториала числа.
//
//  #### Технические требования:
// - Считать с помощью модального окна браузера число, которое введет пользователь.
// - С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.
// - Использовать синтаксис ES6 для работы с перемеными и функциями.
//
// #### Не обязательное задание продвинутой сложности:
// - После ввода данных добавить проверку их корректности. Если пользователь не ввел числа,
// либо при вводе их указал не числа, - спросить оба числа заново
// (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее информация).

(function ($) {
    $(document).ready(function () {
        $.fn.animate_Text = function () {
            let string = this.text();
            return this.each(function () {
                let $this = $(this);
                $this.html(string.replace(/./g, '<span class="new">$&</span>'));
                $this.find('.new').each(function (i, el) {
                    setTimeout(function () {
                        $(el).addClass('div_opacity');
                    }, 80 * i);
                });
            });
        }
        $(".factorial").show().animate_Text();
        $(".fibonacci").show().animate_Text();
    });
})(jQuery);

const btnStart = document.querySelector(".start");
const btnFib = document.querySelector(".fib");
const answerDiv = document.querySelector(".calc");

let result;
let userNumber;

setTimeout(function () {
    btnStart.style.display = "block";
	btnFib.style.display = "block";
}, 3000);

btnStart.addEventListener("click", startPrompt);
btnFib.addEventListener("click", startPrompt);

function startPrompt(e) {
    userNumber = +prompt("Введите число");
    for (let i=0; i<=3; i++) {
        if (isNaN(userNumber) && i < 2) {
            console.log("Это не число, введите число!");
            userNumber = +prompt("Введите число", userNumber);
        }
        if (isNaN(userNumber) && i === 2) {
            console.log("достаточно попыток");
            break;
        }
        if (Number(userNumber)) {
            console.log("Вы ввели число " + userNumber);
            
			if (e.target === btnStart) {
				result = calcFactorial(userNumber);
				showAnswer("Факториал числа "+userNumber+" равен "+result);
				break;
			}
            if (e.target === btnFib) {
				result = calcFib(0,1,userNumber);
				console.log("Число Фибоначи для этого члена последовательности " + result);
				showAnswer("Число Фибоначи для "+userNumber+" члена будет " + result);
				break;
			}
            break;
        }
    }
}

function calcFactorial(value) {
    return  (value !==1) ? value * calcFactorial(value-1) : 1;
}

function calcFib(F0, F1, n) {
        let Fn = F0 + F1;
        return (n  > 2) ? calcFib(F1, Fn, n-1): Fn;
}

function showAnswer(textHtml) {
	if (userNumber!==undefined && result!==undefined) {
        let paragraphTag = document.createElement("P");
        paragraphTag.innerHTML = textHtml;
        answerDiv.append(paragraphTag);

        let btnCloseTag = document.createElement("span");
        btnCloseTag.innerHTML = "X";
        btnCloseTag.classList.add("btnClose");

        paragraphTag.append(btnCloseTag);

        jQuery(".btnClose").click(function () {
            jQuery(this).parent("p").fadeOut();
        });
	}
}


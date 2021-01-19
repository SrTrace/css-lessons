// let check=prompt("Hello there");
// console.log(typeof(check));
// console.log(check

// let checkUser=prompt("Hello, put your login!");

// if (checkUser == "Admin") {

// 	let pass=prompt("Put the password");

// 	if (pass==null) {
// 		console.log("Cancel");
// 	} else if (pass=="I am a boss") {
// 		console.log("Hello");
// 	} else {
// 		console.log("Wrong password");
// 	}
// } else if (checkUser==null) {
// 	console.log("Cancel");
// } else {
// 	console.log("I don't know you!");
// }


// Конструкция switch

// let a = 2 + 2;

// switch (a) {
//   case 3:
//   	console.log( 'Маловато' );
//     break;
//   case 4:

//     console.log( 'В точку!' );
//     break;
//   case 5:

//     console.log( 'Перебор' );
//     break;
//   default:

//     console.log( "Нет таких значений" );
// }

// Задачи на циклы
//Вывести все число от 100 до 0, которые делятся без остатка
//в обратном порядке

// for (let i=100; i>=0; i-=5) {
// 	console.log(i);
// }

//Посчитать сумму всех чисел от 1 до 1000
// let count=0;
// for (let i=1; i<=10; i++) {
// 	count+=i;
// 	console.log(count);
// }

//Сгенирировать случайное число от 0,9 до 1
// Вызывать ф-ю Math.random() пока не получим
// нужную цифру в заданном диапазоне. Вывести на
// экран число попыток и само число

// let number;
// let tries=0;
// do {
// 		number=Math.random();
// 		tries++;
// 	} while (number<0.9)
// 	console.log("Our happy number: " + number);
// 	console.log("Tries quantity: " + tries);


// Вывести цифры которы делятся на 2 и на 3
//без остатка

 // for ( let i=0; i<=100; i++) {
 // 	// if (i%2===0 && i%3===0) {
 // 	// 	console.log(i);
 // 	// }
 // 	// условие ниже работает не правильно
 // 	// оператор "и" не верно работает с
 // 	// конструкцией !==
 // 	// Почему?
 // 	if (i %3 !== 0 || i % 2 !== 0) {
 // 		continue;
 // 	}
 // 	  console.log(i);
 // }


 //Exercise 1 Lesson 4 Loops

 // let userNumber = +prompt("Enter a number please");
 // while (isNaN(userNumber)) {
 // 	console.log("Enter number again");
 // 	userNumber = +prompt("Enter only a number please");
 // }
 // console.log(`the number is  ${userNumber}`);

 //Exercise 2 Lesson 4 Loops

 // let userNumber=prompt("Enter a number");
 // let sumDigits=0;

 // for (let i of `${userNumber}`) {
 // 	sumDigits += +i;
 // }
 // console.log(sumDigits);

 //Exercise 3 Lesson 4 Loops

 // let userMinNumber = +prompt("Set a minimum number");
 // while (isNaN(userMinNumber)) {
 // 	console.log("Please enter a number");
 // 	userMinNumber = +prompt("Set a minimum number");
 // }
 // let userMaxNumber = +prompt("Set a maximum number");
 // while (isNaN(userMaxNumber)) {
 // 	console.log("Please enter a number");
 // 	userMaxNumber = +prompt("Set a maximum number");
 // }

 // for (let i=userMinNumber; i<=userMaxNumber; i++ ) {
 // 	if ( i%2 != 0) {
 // 		continue;
 // 	}
 // 	console.log(i);
 // }

 //Exercise 4 Lesson 4 Loops

//  let userNumber = +prompt("Enter your number");
// while (isNaN(userNumber)) {
//  	console.log("Please enter a number");
//  	userNumber = +prompt("Set a number");
//   }
//   let stars="*";
//  	 for (let i=0; i<userNumber; i++) {
//   		 console.log(stars.repeat(userNumber));
//   		 console.log("\n");
//   	}

//Exercise 1 Lesson 5-6 Functions

// let x=+prompt("Put a natural number x for pow(x,n)");
// let n=+prompt("Put a natural number n for pow(x,n)");

// function calcPow(x="not integer number",n="not integer number") {
// 	if (!Number.isInteger(x) || n<=0) {
// 		console.log("Nubmer x & n should be a natural and bigger then 1");
// 	}  else if (!Number.isInteger(n) || n<=0) {
// 		console.log("Nubmer x & n should be a natural and bigger then 1");
// 	} else {
// 		return x**n;
// 	}
// }

// console.log(calcPow(x,n));

//Exercise 2 Lesson 5-6 Functions

//Получить целое натуральное число от 1 до n

// let userNumber=+prompt('Put an integer natural number from 1 to n');

// while (!Number.isInteger(userNumber) || userNumber<=0) {
//  	console.log("Error: nubmer should be a natural and bigger then 1");
//  	userNumber=+prompt('Put an integer natural number from 1 to n');
// }
// console.log(`You put a : ${userNumber}`);

// //Ф-я для которая получает натуральное число и
// //проверяет является ли число простым (true or false)

// function isPrime(x) {
// 	for (let i=2; i<x; i++) {
// 		if (x%i==0) {
// 			return false;
// 			break;
// 		}
// 		else {
// 			return true;
// 		}
// 	}
// }

// console.log(`This a prime number: ${isPrime(userNumber)}`);

// //Ф-я для демонстрации простых чисел от 1 до числа
// //введенного пользователем и использованием isPrime

// function showPrime(a) {
// 	for (let i=0; i<=a; i++) {
// 		if (isPrime(i)==true) {
// 			console.log(`это число -> ${i}`);
// 		}
// 	}
// }
// console.log(`Простые числа в диапазоне до ${userNumber}`);
// showPrime(userNumber);

//Exercise 3 Lesson 5-6 functions

//Replace functions grantAccess & denyAccess with arrow functions

// function checkAge(age, granted, denied) {
// 	if (age < 18) denied();
// 	else granted();
// }
// let age = prompt('What is your age?', 18);

// let grantAccess=() => alert('Access granted');

// let denyAccess=() => alert('Access denied');

// checkAge(age, grantAccess, denyAccess);

//Exercise 1 Lesson 7

// let product={};

// product.name="Laptop";
// console.log(product.name);

// product.price=1200;
// console.log(product.price);

// product.price=1000;
// console.log(product);
// console.log(product.price);

// delete product.name;
// console.log(product);
// console.log(product.name);

//Exercise 2 Lesson 7

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Peter: 130
// }

// let sum=0;

// for ( let key in salaries) {
// 		sum += salaries[key];
// }
// console.log(sum);


//Exercise 3 Lesson 7

// let calculator = {
// 	read() {
// 		this.num1=+prompt("Put a number");
// 		this.num2=+prompt("Put another number");
// 		console.log(calculator.num1);
// 		console.log(calculator.num2);
// 	},
// 	sum() {
// 		return this.num1+this.num2;
// 	},
// 	mul() {
// 		return this.num1*this.num2;
// 	},
// };
// console.log(calculator);
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Ladder

// let ladder = {
// 	step: 0,
// 	up() {
// 		this.step++;
// 		//console.log(this.step);
// 		return this;
// 	},
// 	down() {
// 		this.step--;
// 		//console.log(this.step);
// 		return this;
// 	},
// 	showStep: function() {
// 		console.log(this.step);
// 		return this;
// 	}
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().down().showStep();

//Exercise 4 Lesson 7

// function Calculator() {
// 	this.read = function() {
// 		this.a = +prompt('Put a nubmer', '0');
// 		this.b = +prompt('Put a nubmer', '0');
// 	};
// 	this.sum = function() {
// 		return this.a +this.b;
// 	};
// 	this.mul = function() {
// 		return this.a * this.b;
// 	};
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum = " + calculator.sum());
// console.log("Mul = " + calculator.mul());

//Exercise 5 Lesson 7

// function Accumulator(startingValue) {
// 	this.value = startingValue;
// 	this.read = function() {
// 		this.value += +prompt('Adds your-entered value to starting value', '0');
// 	};
// }

// let accumulator = new Accumulator(1);
// accumulator.read();

// console.log(accumulator.value);

//////////
// const jane = {
// 	first: 'Jane',
// 	last: 'Doe',
// 	set full(fullName) {
// 		const parts = fullName.split(' ');
// 		this.first = parts[0];
// 		this.last = parts[1];
// 	},
// };

// jane.full = 'Richard Roe';
// console.log(jane.first, 'Richard');
// console.log(jane.last, 'Roe');

///////////////

// function User(name) { //имя ф-и конструктора должно начинатся с большой буквы
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User('Uasia'); //ф-я конст-р должна вызываться при помощи оператора 'new'

// console.log(user);
// console.log(user.name); // Вася
// console.log(user.isAdmin); // false

//// Date начало недели с пн
// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getLocalDay(date) {

//   let day = date.getDay();

//   if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//     day = 7;
//   }

//   return day;
// }
// console.log(getLocalDay(date));

///// Какой день был много дней назад

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate() + ' ' + dateCopy.getFullYear() + " " + dateCopy.getMonth();
// }

// let date = new Date(2015, 0, 2);

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//Последнее число месяца?

// function getLastDayOfMonth(year, month) {
// 	let date = new Date(year, month + 1, 0); //0 день перед первым числом
// 	return date.getDate();
// }

// console.log(getLastDayOfMonth(2021, 6));

//Сколько сегодня прошло секунд?

// function getSecondsToday() {
// 	let date = new Date();
// 	let secondsToday=(date.getHours()*3600+date.getMinutes()*60+date.getSeconds());
// 	return console.log(`It were ${secondsToday} seconds today`);
// }

// getSecondsToday();

//Сколько секунд осталось до завтра?

// function getSecondsToTomorrow(year, month, day) {
// 	let dateNow = new Date();
// 	let dateFuture = new Date(year, month, day);
//  	let secondsLeft = Math.round((dateFuture - dateNow) / 1000); // разница в миллисекундах, получаем секунды
// 	return console.log(`It remains a ${secondsLeft} seconds untill tomorrow`);
// }
//
// getSecondsToTomorrow(2021, 0, 8);

//Фильтрация уникальных элементов массива

// function unique(arr) {
// 	let set = new Set(arr);
// 	return set;
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log(unique(values)); // Hare,Krishna,:-O

//Отфильтруйте анаграммы
	//some code ... here
//

// Arrays exercise

// let fruits = ['Apple','Orange', 'Melon'];
//
// // for (let i=0; i<fruits.length; i++) {
// // 	console.log(fruits[i]);
// // }
// fruits.forEach(fruits => console.log(fruits));

//Exercise 1 lesson 9
// let arr = ['Jazz','Blues'];
// arr.push('Rock-n-Roll');
// console.log(arr[2]);
// arr.splice(arr.length/2, 1,  'Classics'); //for arrays with odd length
// console.log(arr[1]);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('Rap', 'Reggae');
// console.log(arr);
//end ex1

// let users = [
// 	{ id: 1,  name:  "John" },
// 	{ id: 2,  name:  "Pete" },
// 	{ id: 3, name: "Mary" }
// ];
// let user = users.find(w => w.id == 1);
// alert(user.name); // John

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let names = 'Bilbo, Gandalf, Nazgul';
// console.log(names);
// let arr = names.split(', ');
// console.log(arr);


// Создание элемента
//
// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = '<strong>Всем привет!</strong>Вы прочитали важное сообщение.';
// console.log(typeof div);
//
// // Методы вставки
//
// document.body.append(div);
// setTimeout(() => div.remove(), 1000);

//Создайте список
//
// let ul = document.createElement('ul');
// document.body.append(ul);
//
// while (true) {
//     let data = prompt("Введите текст для элемента списка", "");
//
//     if (!data) {
//         break;
//     }
//
//     let li = document.createElement('li');
//     li.textContent = data;
//     ul.append(li);
// }

//Создайте дерево из объекта

//     let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },
//
//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };
// function createTree (container, obj) {
//     container.innerHTML = createTreeText(obj);
// }
// function createTreeText(obj) { // отдельная рекурсивная функция
//     let li = '';
//     let ul;
//     for (let key in obj) {
//         li += "<li>" + key + createTreeText(obj[key]) + "</li>";
//     }
//     if (li) {
//         ul = '<ul>' + li + '</ul>';
//     }
//     return ul || '';
// }
// createTree(container, data);
// </script>
// <script>
// let data = {
//     "Рыбы": {
//         "форель": {},
//         "лосось": {}
//     },
//
//     "Деревья": {
//         "Огромные": {
//             "секвойя": {},
//             "дуб": {}
//         },
//         "Цветковые": {
//             "яблоня": {},
//             "магнолия": {}
//         }
//     }
// };
//
// function createTree(container, obj) {
//     container.append(createTreeDom(obj));
// }
//
// function createTreeDom(obj) {
//     // если нет дочерних элементов, то вызов возвращает undefined
//     // и элемент <ul> не будет создан
//     if (!Object.keys(obj).length) return;
//
//     let ul = document.createElement('ul');
//
//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.innerHTML = key;
//
//         let childrenUl = createTreeDom(obj[key]);
//         if (childrenUl) {
//             li.append(childrenUl);
//         }
//
//         ul.append(li);
//     }
//
//     return ul;
// }
//
// let container = document.getElementById('container');
// createTree(container, data);

////////////////////////////////

function countRabbits () {
    let olRab = document.createElement('ol');
    olRab.id = 'rabCount';
    container.append(olRab);
    for (let i=1; i<=5; i++) {
        console.log('Rabbit number '+ i);
        let li = document.createElement('li');
        li.innerHTML = 'Rabbit '+ i;
        olRab.append(li);
    }
}
btn.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    console.log(event.type + " на " + event.currentTarget);
    console.log("Координаты: " + event.clientX + ":" + event.clientY);
}

btn.addEventListener('click', countRabbits);

//Спрятать текст после нажатия кнопки
//мой вар
function hiddenText () {
    text.hidden = true;
}
hider.addEventListener('click', hiddenText);
// альтернативный из учебника
// document.getElementById('hider').onclick = function () {
//     document.getElementById('text').hidden = true;
// };

//Создайте кнопку, которая будет скрывать себя по нажатию.

// document.getElementById('vanish').onclick = function () {
//     document.getElementById('vanish').hidden = true;
// };
//или в html коде onclick="this.hidden=true"

//Передвиньте по полю мяч
//Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:
//
// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.

field.onclick = function(event) {
    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();

    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2
    };

    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top<0) ballCoords.top = 0;

    // запрещаем пересекать левую границу поля
    if (ballCoords.left<0) ballCoords.left = 0;

    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};

//Создать меню, которое по нажатию открывается либо закрывается
let dropList = document.querySelector('.dropDownList'); // а так не работает Почему?
//let dropList = document.getElementById('dropList'); // с этим работает
let listToggle = dropList.querySelector('.titleList');

 listToggle.onclick = function () {
     dropList.classList.toggle('open');
}

// Добавить кнопку закрытия  на список сообщений
let panes = document.querySelectorAll('.pane');
 for ( let pane of panes) {
     pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
     // кнопка становится первым потомком плитки (pane)
     pane.firstChild.onclick = () => pane.remove();
 }
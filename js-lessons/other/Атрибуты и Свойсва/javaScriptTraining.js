//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

//let elemSpecial = document.querySelector('[data-widget-name]');
//console.log(elemSpecial.getAttribute('data-widget-name'));

// querySelectorAll не получается Почему?
// let elemSpecial = document.querySelector('[class]').nextElementSibling;
// div = elemSpecial.getAttribute('class');
// console.log(div);
//
// let elemSpecialOne = document.querySelector('input[name]');
// console.log(elemSpecialOne);
// console.log(elemSpecialOne.getAttribute('name'));

//Сделайте внешние ссылки оранжевыми

// let linkTarget = document.querySelectorAll('a');
// console.log(linkTarget);
//
// for (let link of linkTarget) {
//     let href = link.getAttribute('href');
//     if (!href) continue; //нет атрибута
//     if (!href.includes('://')) continue; //нет протокола используется метод поиска подстроки
//     if (href.startsWith('http://internal.com')) continue; //внутренняя  используется метод поиска подстроки
//     link.style.color = 'orange';
// }
//-------------or----------------
// найти все ссылки, атрибут href у которых содержит ://
// и при этом href не начинается с http://internal.com
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');
//Написать функцию `filterBy()`, которая будет принимать в себя 2 аргумента.
// Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
// - Функция должна вернуть новый массив, который будет содержать в себе все данные,
// которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом.
// То есть, если передать массив ['hello', 'world', 23, '23', null],
// и вторым аргументом передать 'string', то функция вернет массив [23, null].

// let arr = ['hello', 'world', 23, '23', null, NaN, 104];
//
// function filterBy(array, typeData) {
//     let newArr = array.filter(function(item) {  // если true - элемент добавляется к результату, и перебор продолжается
//         return typeof item != typeData;  // возвращается пустой массив в случае, если ничего не найдено
//     });
//     return newArr;
// }
//
// let result = filterBy(arr, 'number');
//
// console.log(result);

//Arrays
let arr = new Array();
let arr1 = [];
let fruits = ["Apple", "Orange", "Melon"];
console.log(fruits);
let arr3 = ['Apple', { name: 'John', obj:{id: "poo", arr:[1,2,3,{ind: 23}]} }, true, function () { alert('hello'); }];
// //console.log(arr3);
// // Accessing  Array Elements
// //console.log(fruits[0]);
// fruits[2] = "Pear";
// //console.log(fruits);
// //Array length
// //console.log(fruits.length);
// fruits[3] = "Pine";
// //console.log(fruits);
// fruits.length = 2;
// //console.log(fruits);
// //Iterating an Array
for (let i=0; i< arr3.length; i++) {
    console.log(arr3[i]);
}
for  (let elem of arr3) {
    console.log(elem);
}
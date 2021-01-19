//Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.

let arrForList = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv', 25]; // массив для вывод в виде списка

function getUserList(arr) {

    let  userList = document.createElement('ul'); // создаем  и присв переменной тег ul
    userList.id = 'specialList'; // не работает с .className Почему?
    document.body.append(userList);

    let list = []; // создаем новый массив с пунктами списка
    for (let i=0; i<arr.length; i++) {
        let userItem = document.createElement('li'); // создаем и присв. переменной тег li
        userItem.innerHTML = arr[i];
        specialList.append(userItem);
        list.push(userItem);
    }
    return list;
}

getUserList(arrForList); //


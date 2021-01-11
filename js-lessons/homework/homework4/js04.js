function CreateUser() {
	this.firstName = prompt('What is your name?', 'Ann');
	this.lastName = prompt('What is your surname?', 'Brick');
}

const newUser = new CreateUser();

let descriptor = Object.defineProperties(newUser, {
  firstName: { writable: false },
  lastName: { writable: false },
});
console.log(JSON.stringify(descriptor, null, 2));
newUser.firstName = 'Jane';
console.log(newUser.firstName);
newUser.getLogin = function() {
	console.log('Your login is ' + newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase());
};
newUser.getLogin();

//не сделал!
//Создать функции-сеттеры `setFirstName()` и `setLastName()`, которые позволят изменить данные свойства.
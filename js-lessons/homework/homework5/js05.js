function CreateUser() {
	this.firstName = prompt('What is your name?', 'Ann');
	this.lastName = prompt('What is your surname?', 'Brick');
	this.birthday = prompt('When is your birthday?', '17.11.1982');
}

const newUser = new CreateUser();

let descriptor = Object.defineProperties(newUser, {
  firstName: { writable: false },
  lastName: { writable: false },
});
//console.log(JSON.stringify(descriptor, null, 2));
newUser.firstName = 'Jane';
//console.log(newUser.firstName);
newUser.getLogin = function() {
	console.log('Your login is ' + newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase());
};
newUser.getLogin();

//не сделал!
//Создать функции-сеттеры `setFirstName()` и `setLastName()`, которые позволят изменить данные свойства.

newUser.getAge = function () {
		let userBirthDay = this.birthday.slice(0, 2);
		let userBirthMonth = this.birthday.slice(3, 5)-1; //in line with js month		
		let userBirthYear = this.birthday.slice(6);		
		let userBirth = new Date(userBirthYear, userBirthMonth, userBirthDay);		
		let today = new Date();		
		this.age = Math.floor((today - userBirth)/(1000*3.154e+7)); //ms to second and to years
		return console.log(`Your age is ` + this.age);
	};
newUser.getAge();

newUser.getPassword = function() {
	console.log(`Your password is 
			 	${newUser.firstName[0].toUpperCase() +
			 	newUser.lastName.toLowerCase() +
			 	newUser.birthday.slice(6)}`);
};
newUser.getPassword();
// Задать число с помощью пользователя
let userNumber=+prompt("Input an integer number");
switch (Number.isInteger(userNumber)) {
	case true:
		break;
	case false:
		for (let i=0; i<=2; i++) {
			if (Number.isInteger(userNumber)==false && i==2) {
				console.log("See you..");
				break;
			} else if (Number.isInteger(userNumber)==false) {
				userNumber=+prompt("Input an integer number");
				console.log("Please enter an enteger number");
				console.log(`You have try: ${1-i}`);
			} else {
				console.log("Else:--")
				break;
			}				
		}
	break;
}
//Объявим переменную для хранения кол-ва цифр кратных 5

let countNubmers=0;

for (let i=0; i<=userNumber; i++) {
	if (i%5!=0) {
		continue;
	}
	countNubmers+=1;
	console.log(i);
}
if (countNubmers<=1) {
	console.log("Sorry, no numbers");
} else {
	console.log(`Кол-во цифр кратных 5: ${countNubmers}`);
}

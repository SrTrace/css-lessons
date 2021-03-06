let car = {
	model: "subaru",
	color: "khaki",
	engine: {
		value: "2.0",
		turbo: true,
		overhaul: "20k km ago",
	},
	owner: {
		name: "John",
		surname: "Doe",
		race: "aryan",
		character: ["nordic", "logic",  "mad every spring time",
			family={status: "alone", children: "none", other: "top secret",}
			],
	},
	wheels: "R17",
};

function createCloneObject(obj) {
	let clone = {};
	for (let key in obj) {
		if ( typeof obj[key] !== "object") {
			clone[key]=obj[key];
		} else {
			clone[key]= createCloneObject(obj[key]);
		}
	}
	return clone;
}

let stolenCar = createCloneObject(car);
stolenCar.owner.name = "Alex";
stolenCar.owner.surname =  "Slyfox";
console.log(createCloneObject(stolenCar));

car.color = "green";
car.info = "owner in prison since last year";
console.log(car);

let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
console.log(c);
console.log((two));
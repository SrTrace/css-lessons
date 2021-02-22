const btnCreateStudent = document.querySelector(".newStudent");
const btnProgressFilling = document.querySelector(".fillTable");
const studList = document.querySelector(".studentsList");
const studDetails = document.querySelector(".detailBlock");
const studDetailsList = document.querySelector(".studentDetails");

btnCreateStudent.addEventListener("click", ()=> createStudent());
btnProgressFilling.addEventListener("click", ()=> fillingProgress());
studList.addEventListener("click",  showDetails);

let students2021 = [];

function Student(name, lastName, table, resolution, grant) {
	this.name = name;
	this.lastName = lastName;
	this.table = [];
	this.resolution = resolution;
	//this.grant = grant;
}

function FillingTable(eng, math, bio, chem) {
	this.eng = eng;
	this.math = math;
	this.bio = bio;
	this.chem = chem;
}

function createStudent() {
	let name = prompt("Enter your name", "name");
	let lastName = prompt("Enter your lastName", "lastName");

	let student = new Student(name, lastName);
	students2021.push(student);

	addStudentToList(student.name, student.lastName);

	let repeatCreate = confirm("Create a new student?");
	if (repeatCreate === true) {
		createStudent();
	}
}

function fillingProgress() {
	// fill up student table by cycle 
	let chooseStudent = prompt("Choose lastName of student", "lastName");
	//console.log(chooseStudent);

	let studentTarget = students2021.find(pers => pers.lastName ===  chooseStudent);
	//console.log(studentTarget);
	let index = students2021.indexOf(studentTarget);
	console.log(index);

	if (index !== -1) {
			let eng = prompt("eng", "5 4 3 2");
			let math = prompt("math", "5 4 3 2");
			let bio = prompt("bio", "5 4 3 2");
			let chem = prompt("chem", "5 4 3 2");
			//if (subject === null || rating === null) {
			if (eng, math, bio, chem !== null) {
				students2021[index].table.push(new FillingTable(eng, math, bio, chem));
			}
			checkRating(students2021[index].table, index);
	} else {
		console.log("This student does not  exist!");
	}
	//console.log(students2021[index]);
}



function checkRating(student, index) {
	console.log(student);
	let countSubjects = 4;

	let sumGrade = function toArray(obj) {
		const result = [];
		for (const prop in obj) {
			const value = obj[prop];
			if (typeof value === 'object') {
				result.push(sumGrade(value));
			} else {
				result.push(value);
			}
		}
		return result.reduce((sum, current) => sum + Number(current), 0)
	};

	let averageGrade = sumGrade(student)/countSubjects;

	if (averageGrade  > 3) {
		students2021[index].resolution = "transferred";
		console.log("The student is transferred to the next course");
	}  else {
		students2021[index].resolution = "failed";
		console.log("The student failed transfer to the next course");
	}
}

function addStudentToList(name, lastName) {
	let li = document.createElement("li");
	li.innerHTML = name +" "+lastName;
	li.setAttribute("name", lastName);
	studList.append(li);
}

function showDetails(event) {
	let person = event.target.getAttribute("name");
	console.log(person);
	students2021.forEach(item => {
		console.log(item);
		if ( item.lastName === person) {
			studDetailsList.innerHTML = "";

			studDetailsList.innerHTML = item.name  +"</br>"+item.lastName +"</br>"+ item.resolution+"</br>";
			}
		});
}

console.log(students2021); // show list on screen
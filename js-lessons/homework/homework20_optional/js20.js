let teamEfficiencyPerDay = [2, 2, 5, 5, 7, 8, 6, 4, 7, 5,];

let  taskList = [100, 500, 10, 20, 45, 50, 80, 15, 25, 10, 200, 75, 20, 30, 30,];

let deadLine = new Date("2021-03-15");

let startPoint = new Date();

let dayToDeadline;

let weekends = 0;

function estimateTimingForTasks(team, tasks, deadline) {
	let tasksPerDay = getSumOfArr(team);
	let tasksTotal = getSumOfArr(tasks);

	let needDays = Math.round(tasksTotal/tasksPerDay);
	console.log("Total  working days need for complete tasks->> " + needDays);

	dayToDeadline = countDifferenceBetweenDate(deadline);
	console.log("Day to deadline ->> " + dayToDeadline);

	let workingDays = countworkingDays(deadline);
	console.log("Working days without  weekend " + workingDays);
	console.log("Days for rest ->> " + weekends);

	let difference  = workingDays-needDays;
	console.log("Difference between working days and period for completing all tasks " + difference);

	if (difference > 0) {
		console.log(` 
			Все задачи будут успешно выполнены за
			${difference*8} дней
			до наступления дедлайна!
			 `);
	} else {
		console.log(`
			Команде разработчиков придется потратить дополнительно  
			${0-difference*8} часов после дедлайна,
			чтобы выполнить все задачи в беклоге
		`);
	}
}

function getSumOfArr(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
}


function countDifferenceBetweenDate(deadline) {
	console.log("Deadline time->> " + deadline);
	console.log("Start begins ->> " + startPoint);
	return Math.round((deadline - startPoint) / ( 1000 * 3600 * 24));
}


function countworkingDays(deadline) {
	for (let i=0; i<=dayToDeadline; i++) {
		startPoint.setTime(deadline.getTime()+((1000*3600*24)*i));
		let dayOfWeek = startPoint.getDay();
		if ((dayOfWeek===0) || (dayOfWeek===6)) {
			weekends++;
		}
	}
	return Math.round(dayToDeadline - weekends);
}

estimateTimingForTasks(teamEfficiencyPerDay, taskList, deadLine);
console.log(startPoint);
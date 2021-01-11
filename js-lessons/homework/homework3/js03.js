let numb1=+prompt("Enter a first number");
	console.log(`You put: ${numb1}`);

let numb2=+prompt("Enter a second number");
	console.log(`You put: ${numb2}`);

let userMathOperation=prompt("What will do we do?", "type + or - or * or /");
	console.log(`Math operation: ${userMathOperation}`);

function simpleCalc(a, b, operator) {
	switch(userMathOperation) {
  		case '+':  
    		return a+b;
  		case '-':   
    		return a-b;
  		case '*':  
    		return a*b;
  		case '/':  
    		return a/b;
	}
}

let result=simpleCalc(numb1, numb2, userMathOperation);

console.log(`The result of calc: ${result}`);
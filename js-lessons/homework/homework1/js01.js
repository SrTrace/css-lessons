//Запрос имя пользователя
let userName = prompt("Enter your name", "User name");
//Проверка типа данных и значения переменной
console.log(typeof(userName));
console.log(userName);
  //Проверка имени пользователя
  while (true)  {
    if ( userName==="User name") {
          console.log(userName);
          userName=prompt("Enter correct name");
    } else if (userName===null) {
          console.log("See you later");
      break;
    } else {
      break;
    }
  }
  console.log(userName);
   if (userName!==null) {
        //Запрос возраста пользователя
      let userAge = +prompt("Enter your age", "the value must be a number");
    //Проверка типа данных и значения переменной
      console.log(typeof(userAge));
      console.log(userAge);
      while (true) {
          if (isNaN(userAge)) {
              console.log("Not a Number");
              userAge = +prompt("Incorrect value, enter your age", "the value must be a number");
          } else if (userAge<0 || userAge>120) {
              console.log("Incorrect age");
              userAge = +prompt("Incorrect value, enter your age", "the value must be a number");
          } else if (userAge===0) {
            break;
          } else {
            break;
          }
      }
        console.log(userName);
        console.log(userAge);
              //Проверка условий для возраста пользователя
                switch (true) {
                    case (userAge<18 || isNaN(userAge)):
                        console.log("You are not allowed to visit this website");
                        alert("You are not allowed to visit this website");
                    break;
                    case (userAge>=18 && userAge<=22):
                        let message = confirm("Are you sure you want to continue?");
                        if (message == true) {
                            console.log("Welcome, "+ userName);
                            alert("Welcome, "+ userName);
                        } else {
                            console.log("You are not allowed to visit this website");
                            alert("You are not allowed to visit this website");
                        }
                    break;
                    case (userAge>22 || userAge<=120):
                        console.log("Welcome, "+ userName);
                        alert("Welcome, "+ userName);
                    break;
                }
    } else {
        console.log("See you later");
        alert("See you later");
      }

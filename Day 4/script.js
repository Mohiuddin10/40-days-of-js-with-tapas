document.getElementById("day4").innerText = "Day 4";

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
       document.getElementById("result").innerText = "It's a normal day.";
}

// ATM Cash Withdrawal System 
const atm = () => {
    let amount = parseInt(document.getElementById("amount").value);
    amount % 2 === 0 
    ? (document.getElementById("result2").innerText = "Withdrawal successful") 
    : (document.getElementById("result2").innerText = "Withdrawal failed");
    
}

const calculator = (operator, num1, num2) => {
    let result;
    operator = document.getElementById("operator").value;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    switch (operator) {
        case "add": 
            result = num1 + num2;
            document.getElementById("result3").innerText = result;
            break;
        case "sub":
            result = num1 - num2;
            document.getElementById("result3").innerText = result;
            break;   
        case "mul":
            result = num1 * num2;
            document.getElementById("result3").innerText = result;
            break;
        case "div":
            result = num1 / num2;
            document.getElementById("result3").innerText = result;
            break;
        case "rem":
            result = num1 % num2;
            document.getElementById("result3").innerText = result;
            break;
        default:
            document.getElementById("result3").innerText = "Invalid operator";
    }

}

const ticketPrice = (age) => {
    age = parseInt(document.getElementById("age").value);
    if (age < 10 && age > 0) {
        document.getElementById("ticketPrice").innerText = "Children $3";
    } else if (age >= 12 && age <= 60) {
        document.getElementById("ticketPrice").innerText = "Adult $10";
    } else if (age > 60) {
        document.getElementById("ticketPrice").innerText = "Senior Citizen $8";
    } else {
        document.getElementById("ticketPrice").innerText = "Please contact the counter for price";
    }
}
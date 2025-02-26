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

const handleHoroscope = () => {
    let month = document.getElementById("month").value;
    switch (month) {
        case "jan":
            document.getElementById("result5").innerText = "♑ Capricornus (Goat) or ♒ Aquarius (Water Bearer)";
            break;
        case "feb":
            document.getElementById("result5").innerText = "♒ Aquarius (Water Bearer) or ♓ Pisces (Fish)";
            break;
        case "mar":
            document.getElementById("result5").innerText = "♓ Pisces (Fish) or ♈ Aries (Ram)";
            break;
        case "apr":
            document.getElementById("result5").innerText = "♈ Aries (Ram) or ♉ Taurus (Bull)";
            break;
        case "may":
            document.getElementById("result5").innerText = "♉ Taurus (Bull) or ♊ Gemini (Twins)";
            break;
        case "jun":
            document.getElementById("result5").innerText = "♊ Gemini (Twins) or ♋ Cancer (Crab)";
            break;
        case "jul":
            document.getElementById("result5").innerText = "♋ Cancer (Crab) or ♌ Leo (Lion)";
            break;
        case "aug":
            document.getElementById("result5").innerText = "♌ Leo (Lion) or ♍ Virgo (Virgin)";
            break;
        case "sep":
            document.getElementById("result5").innerText = "♍ Virgo (Virgin) or ♎ Libra (Balance)";
            break;
        case "oct":
            document.getElementById("result5").innerText = "♎ Libra (Balance) or ♏ Scorpius (Scorpion)";
            break;
        case "nov":
            document.getElementById("result5").innerText = "♏ Scorpius (Scorpion) or ♐ Sagittarius (Archer)";
            break;
        case "dec":
            document.getElementById("result5").innerText = "♐ Sagittarius (Archer) or ♑ Capricornus (Goat)";
            break;
        default:
            document.getElementById("result5").innerText = "Invalid Data";
            break;
    }
}

const handleTriangle = () => {
    let fisrtSides = parseInt(document.getElementById("fisrtSides").value);
    let secoundSides = parseInt(document.getElementById("secoundSides").value);
    let thirdSides = parseInt(document.getElementById("thirdSides").value);
    if (fisrtSides === secoundSides && secoundSides === thirdSides) {
        document.getElementById("result6").innerText = "Equilateral Triangle"
    }
    else if (fisrtSides === secoundSides && secoundSides !== thirdSides) {
        document.getElementById("result6").innerText = "Isosceles Triangle"
    }
    else if (fisrtSides !== thirdSides && secoundSides !== thirdSides) {
        document.getElementById("result6").innerText = "Scalene Triangle"
    } else {
        document.getElementById("result6").innerText = "Isosceles Triangle"
    }
}
console.log("Welcome to day 3");
document.getElementById("day3").innerHTML = "Welcome to day 3";



const oddEven = () => {
    const num = parseInt(document.getElementById("num").value);
    num % 2 === 0 ? document.getElementById("result").innerHTML = "Even" : document.getElementById("result").innerHTML = "odd";
}


// drivingLicence 
const drivingLicence = () => {
    const birthYear = parseInt(document.getElementById("age").value);
    const age = 2025 - birthYear;
    if (age >= 18) {
        document.getElementById("result2").innerHTML = "You are eligible for driving licence";
        return console.log("You are eligible for driving licence");
    } else {
        document.getElementById("result2").innerHTML = "You are not eligible for driving licence";
        return console.log("You are not eligible for driving licence");
    }
}

// calculate ctc
const ctc = () => {
    const basic = parseInt(document.getElementById("salary").value);
    let totalYearSalary = basic * 12;
    let bonus = totalYearSalary * 0.2;
    let ctc = totalYearSalary + bonus
    document.getElementById("result3").innerHTML = `Your CTC is ${ctc}`;
    return console.log(`Your CTC is ${ctc}`);
}

// Traffic Light Simulation.

const trafficLightRed = () => {
    document.getElementById("result4").innerText = "Stop";
    console.log("Stop");
}
const trafficLightGreen = () => {
    document.getElementById("result4").innerText = "GO";
    console.log("Go");
}


// electricityBill 
const electricityBill = () => {
    const unit = parseInt(document.getElementById("units").value);
    const billForToday = unit * 150;
    const billForMonth = billForToday * 30;
    const billforYear = billForMonth * 12;
    const YearlyBillAfterDiscount = billforYear - (billforYear * 0.2);
    document.getElementById("result5").innerHTML = `Your bill for today is ${billForToday} and for month is ${billForMonth} and for year is ${billforYear} and after discount is ${YearlyBillAfterDiscount}`;
    return console.log(`Your bill for today is ${billForToday} and for month is ${billForMonth} and for year is ${billforYear} and after discount is ${YearlyBillAfterDiscount}`);
}

// leapYear 

const leapYear = () => {
    const year = parseInt(document.getElementById("year").value);
    if (year % 4 === 0 && year % 100 !== 0 || year & 400 === 0) {
        document.getElementById("result6").innerHTML = "Leap Year";
        return console.log("Leap Year");
    } else {
        document.getElementById("result6").innerHTML = "Not a Leap Year";
        return console.log("Not a Leap Year");
    }
}

// maxOfThree 
const maxOfThree = () => {
    const p = parseInt(document.getElementById("num1").value);
    const q = parseInt(document.getElementById("num2").value); 
    const r = parseInt(document.getElementById("num3").value);
    if (p > q && p > r) {
        document.getElementById("result7").innerHTML = `The max number is ${p}`;
        return console.log(`The max number is ${p}`);
    } else if (p < q && q > r) {
        document.getElementById("result7").innerHTML = `The max number is ${q}`;
        return console.log(`The max number is ${q}`);
    } else {
        document.getElementById("result7").innerHTML = `The max number is ${r}`;
        return console.log(`The max number is ${r}`);
    }
    
}

// bitwiseDoubling 
const bitwiseDoubling = () => {
    const num = parseInt(document.getElementById("num4").value);
    const result = num << 1;
    document.getElementById("result8").innerHTML = `The result is ${result}`;
    return console.log(`The result is ${result}`);
}
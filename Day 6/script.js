document.getElementById("day6").innerText = "Welcome to Day 6";


// 1. Write a Function to Convert Celsius to Fahrenheit 
const celsiusToFahrenheite = (celsius) => {
    celsius = parseInt(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = fahrenheit;
    return console.log(`Temp. is ${fahrenheit} Fahrenheit`);

}

// 2. Create a Function to Find the Maximum of Two Numbers 

let handleFindMax = (num1, num2) => {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    num1 > num2 ? document.getElementById('result1').innerText = num1 : document.getElementById('result1').innerText = num2;
}


// task 4 
const handleFactorial = (num) => {

    num = parseInt(document.getElementById("f-num").value);
    let factorial = num
    for (num; num > 1; num--) {
        factorial = factorial * (num - 1)

    }
    document.getElementById("result2").innerText = factorial;
}
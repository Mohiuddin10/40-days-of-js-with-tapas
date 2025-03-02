document.getElementById("intro").innerText = "Welcome to Day 5 of JS advanture"; 


// task 1 
for (let i = 1; i <= 10; i++) {
    let star = "";
    for (let row = 1; row <= i; row++) {
        star += "*";
    }
    console.log(star);
}

// task 2 
let number = 3;
for (let i =1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

// task 3 

let oddNumber = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        oddNumber += i;
    }
}

console.log(oddNumber);

// task 4 
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// task 5 
let revNumber = 0;

while (number > 0) {
    let digit = number % 10;
    revNumber = revNumber * 10 + digit;
    console.log(revNumber);
}


const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let op = prompt("Enter operation (+, -, *, /): ");

let result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    if (num2 === 0) {
        console.log("Cannot divide by zero!");
        process.exit();
    }
    result = num1 / num2;
} else {
    console.log("Invalid operation!");
    process.exit();
}

console.log("Result = " + result);
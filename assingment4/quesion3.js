window.onload = function () {

    let n;

    while (true) {
        n = prompt("Enter a number:");
        if (!isNaN(n) && n > 0 && Number.isInteger(Number(n))) {
            n = Number(n);
            break;
        } else {
            alert("Please enter a valid positive integer!");
        }
    }

    let evenNumbers = [];

    for (let i = 2; i <= n; i += 2) {
        evenNumbers.push(i);
    }

    console.log("Even numbers ≤ " + n + ":");

    let i = 0;
    while (i < evenNumbers.length) {
        console.log(evenNumbers[i]);
        i++;
    }
};
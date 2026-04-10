window.onload = function () {

    let n;

    while (true) {
        n = prompt("Enter number of times:");
        if (!isNaN(n) && n > 0 && Number.isInteger(Number(n))) {
            n = Number(n);
            break;
        } else {
            alert("Please enter a valid positive integer!");
        }
    }

    let message = prompt("Enter the message:");

    console.log("Repeated Message:");
    for (let i = 1; i <= n; i++) {
        console.log(i + ". " + message);
    }
};
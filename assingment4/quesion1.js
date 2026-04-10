window.onload = function () {

    function getValidNumber(message) {
        let num;
        while (true) {
            num = prompt(message);
            if (!isNaN(num) && num > 0 && Number.isInteger(Number(num))) {
                return Number(num);
            } else {
                alert("Please enter a valid positive integer!");
            }
        }
    }

    let n1 = getValidNumber("Enter first positive number:");
    let n2 = getValidNumber("Enter second positive number:");
    let n3 = getValidNumber("Enter third positive number:");

    let largest = Math.max(n1, n2, n3);

    alert("Largest number is: " + largest);
};
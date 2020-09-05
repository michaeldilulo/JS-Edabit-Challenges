// 1. Return the Sum of Two Numbers
function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

function sumTwoNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "You did not pass two numbers.";
    }
    return a + b;
}
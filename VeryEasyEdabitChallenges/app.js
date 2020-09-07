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

// 2. Function that converts minutes into seconds
function convertToSeconds(minutes) {
    if (typeof minutes !== "number") {
        return "Please input a number";
    }
    return minutes * 60;
}

function convertToSeconds(minutes) {
    return minutes * 60;
}

// 3. Return the next number from an integer passed
function nextNumber(number) {
    if (typeof number !== "number") {
        return "Please pass in a number"
    }
    return number + 1;
}

// 4. Area of a triangle
function areaTriangle(base, height) {
    var triangleArea = base * height / 2;
    if (typeof base !== "number" || typeof height !== "number") {
        return "You need to pass in a number to find the area"
    }
    return triangleArea;
}

function areaTriangle(base, height) {
    if (typeof base !== "number" || typeof height !== "number") {
        return "Please ensure the inputs are numbers"
    }
    return base * height / 2;
}
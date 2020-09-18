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

// 5. Return something to me
function returnSomething(str) {
    return "something " + '' + str;
}

// 6. Convert hours into seconds
function secondConvert(num) {
    if (typeof num !== "number") {
        return "please input a number"
    }
    return num * 3600;
}

function secondsConverter(hours) {
    if (typeof hours !== "number") {
        return "Please input a number"
    } else if (hours > 24) {
        return "Please input a number between 1 and 24"
    }
    return hours * 3600;
}

// 7. Return first element in an array
function firstElementArray(array) {
    var newArray = array;
    for (let i = 0; i < array.length; i++) {
    }
    return newArray[0];
}

function firstElementArray(array) {
    var newArray = array;
    return newArray[0];
}

//8. Max Edge of a Triangle
function maxEdgeOfTriangle(side1, side2) {
    if (typeof side1 && typeof side2 !== "number") {
        return "Please input a number"
    } else if (side1 && side2 < 0) {
        return "Please input a number greater than 0"
    }
    return side1 + side2 - 1;
}

// 9. Remainder of Two numbers 
function remainderTwoNums(a, b) {
    return a % b;
}

//.10 Find the Perimeter of a Triangle
function perimeterOfTriangle(length, width) {
    if (typeof length && typeof width !== "number") {
        return "Please input a number "
    } else if (length && width <= 0) {
        return "Please input a number that is greater than 0"
    } else {
        return (length + width) * 2;
    }
}

//11. Correct the mistakes
//Before mistakes were corrected
// function squaed(b) {
//     return a * a
// }

function squared(a) {
    if (typeof a !== "number") {
        return "You need to input a number"
    } else {
        return a * a;
    }
}

function squared(b) {
    if (typeof b !== "number") {
        return "Please input a number"
    } else {
        Math.pow(10, 2)
    }
}

//12. Is the Number Less than or Equal to 0?
function lessThanEqualToZero(num) {
    if (typeof num !== "number") {
        return "You need to input a number like yesterday"
    } else if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

function lessThanEqualToZero(num) {
    return num <= 0 ? true : false;
}

//13. Using the "&&" Operator
function andOperator(a, b) {
    if (a === true && b === true) {
        return true;
    } else {
        return false;
    }
}

//14. Less than 100?

function sumLessThan100(num1, num2) {
    return num1 + num2 < 100 ? true : false;
}

function sumLessThan100(num1, num2) {
    if (num1 + num2 < 100) {
        return true;
    } else {
        return false;
    }
}

function sumLessThan100(num1, num2) {
    if (typeof num1 && typeof num2 !== "number") {
        return "Please input a number"
    } else if (num1 + num2 < 100) {
        return true;
    } else {
        return false;
    }
}

//15. Football Points
function footballPoints(wins, draws, losses) {
    var gameWins = wins * 3;
    var gameDraws = draws * 1;
    var gameLoss = losses * 0;
    return gameWins + gameDraws + gameLoss;
}

//16. Are the numbers equal?
function isSameNum(num1, num2) {
    return num1 === num2 ? true : false;
}
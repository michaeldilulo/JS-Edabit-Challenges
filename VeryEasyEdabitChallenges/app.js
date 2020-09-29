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

//17. Farm Problem 
function animalLegs(chickens, cows, pigs) {
    var farmChickens = chickens * 2;
    var farmCows = cows * 4;
    var farmPigs = pigs * 4;
    return farmChickens + farmCows + farmPigs;
}

//18. Convert Hours and minutes into seconds
function secondsConverter(hours, minutes) {
    var hoursConverted = hours * 60 * 60;
    var minutesConverted = minutes * 60;
    return hoursConverted + minutesConverted;
}

// 19. Equality Check 
function equalityCheck(a, b) {
    return a === b ? true : false;
}

// 20. Profitable Gamble
function profitableGamble(prob, prize, pay) {
    return prob * prize > pay ? true : false;
}

// 21. Buggy Code
// example:
// Problem had variable and parameter wrong and needed 
// a false statement for the else if
function has_bugs(buggyCode) {
    if (buggyCode) {
        return 'sad days'
    } else if (!buggyCode) {
        return "it's a good day"
    }
}

// 22. Math.abs()
function absoluteNumber(num) {
    return num < 0 ? (num * -1) : num;
}

function absoluteNumber(num) {
    if (num < 0) {
        return num * -1
    } else {
        return num;
    }
}

// 23. Frames Per Second
function framesPerSecond(minutes, fps) {
    return minutes * 60 * fps;
}

//24. Upvotes vs downvotes (Working with objects)
function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

// 25. Is the string empty?
function stringEmpty(string) {
    return string === "" ? true : false;
}

// 25. Compare Strings by character count
function compareStrings(string1, string2) {
    return string1.length === string2.length ? true : false;
}

// 26. Evenly Divisible by 5
const divisibleFive = num => {
    return num % 5 ? false : true;
}

function divisibleByFive(number) {
    return number % 5 ? false : true;
}

function divisibleByFive(number) {
    if (number % 5) {
        return true
    } else {
        return false;
    }
}

// 27. Length of a String (non recursive & recursive)
function lengthOfString(string) {
    return string.length;
}

function strLen(string, count) {
    count = count || 0;
    if (string.length) {
        return strLen(string.substr(1), ++count);
    } else {
        return count;
    }
}

// 28. Multiple of 100
function multipleOfHundred(number) {
    return number % 100 ? false : true;
}

function multipleOfHundred(number) {
    if (number / 100 == 0) {
        return true;
    } else {
        return false;
    }
}

// 29. Divides Evenly
function dividesEvenly(number1, number2) {
    return number1 % number2 === 0 ? true : false;
}

// 30. Return a string as an integer
function stringIntoInteger(string) {
    return parseInt(string);
}

// 31. Solve the Equation
//! If you use Eval be very careful, its risky. Refrain from using it if possible
function solveEquation(equation) {
    return eval(equation);
}

// 32. Evaluate an Equation
//! If you use Eval be very careful, its risky. Refrain from using it if possible
function evaluateEquation(equation) {
    return eval(equation);
}

// 33. Drinks Allowed?
function drinksAllowed(age, onBreak) {
    return age >= 18 && onBreak === false ? true : false;
}

function shouldServeDrinks(age, onBreak) {
    if (age >= 18 && onBreak === false) {
        return true;
    } else {
        return false;
    }
}

// 34. Concatenate First and Last Name into One String
function concatenateString(firstName, lastName) {
    return lastName + ", " + firstName;
}

// 35. Movie Theatre Attendance
function movieTheatreAttendance(age, isSupervised) {
    return age >= 15 || isSupervised === true ? true : false;
}

// 36. Reverse an Array
function reverseArray(array) {
    return array.reverse();
}

// 37. Using Ternary Operators
function yeahNope(bool) {
    return bool === true ? "yeah" : "nope"
}

// 38. Convert an Array to a String
function convertArrToString(array) {
    return array.join("");
}

// 39. Return the last element in an array
function returnLast(array) {
    var lastElement = array.pop()
    return lastElement;
}

// 40. Flip the boolean
function flipBoolean(boolean) {
    return !boolean ? 1 : 0;
}

// 41. Is the Number Odd or Even?
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

// 42. Name Greeting!
const nameGreeting = string => "Hello " + string + "!";

// 43. ES6 Destructing Arrays 1
const array = [1, 2, 3, 4, 5];
let a = array[0];
let b = array[1];

// 44. Triangle and Parallelogram Area Finder
function triParallel(base, height, shape) {
    if (shape === 'triangle') {
        return 0.5 * base * height;
    } else {
        return base * height;
    }
}

// 45. To the power of ______
function powerOf(number, exponent) {
    return Math.pow(number, exponent);
}

// 46. Minimal 1 (If else if Boolean)
// rewritten
function evenNumber(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false;
    }
}

function evenNumber(number) {
    return number % 2 === 0 ? true : false;
}

// 47. Word without first character 
function wordWithoutFirst(string) {
    return string.substring(1);
}

// 48. Minimal 2 Boolean Redundancy
//rewritten
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

function oddOrEven(number) {
    return number % 2 === 0 ? "even" : "odd"
}

// 49. Fix the error: Check whether a given number is 
// odd
function isOdd(number) {
    return number % 2 === 0 ? false : true;
}

// 50. Is the string odd or even
function stringOddOrEvenChars(string) {
    if (string.length % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 51.Check if an array contains a given number
function arrayContainsElement(array, element) {
    return array.includes(element) ? true : false;
}

// 52. Power Calculator
function powerCalculator(voltage, current) {
    return voltage * current;
}

// 53. AND, OR and NOT
function NOT(n) {
    if (n === 0) {
        return n + 1;
    } else if (n === 1) {
        return n - 1
    } else {
        return n;
    }
}

function AND(a, b) {
    return a && b;
}

function OR(a, b) {
    return a || b;
}

// 54. Word Numbers
function wordNumbers(string) {
    switch (string) {
        case "zero":
            string = 0;
            break;
        case "one":
            string = 1;
            break;
        case "two":
            string = 2;
            break;
        case "three":
            string = 3;
            break;
        case "four":
            string = 4;
            break;
        case "five":
            string = 5;
            break;
        case "six":
            string = 6;
            break;
        case "seven":
            string = 7;
            break;
        case "eight":
            string = 8;
            break;
        case "nine":
            string = 9;
    }
    return string;
}

// 55. Find the Index
function findIndex(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
        }
        return array.indexOf(string);
    }
}

// 56. Concatenating Two Integer Arrays
function concatIntArrays(array1, array2) {
    return array1.concat(array2);
}

// 57. Find the Index Part 1
function findIndexInt(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
        }
        return array.indexOf(number)
    }
}

// 58. Recreating the string.length property
function lengthString(string) {
    var length = 0;
    for (let i = 0; i < string.length; i++) {
        var length = length + 1;
    }
    return length;
}

// 59. Stack the boxes
function stackBoxes(number) {
    return number * number;
}

// 60. Check a string for spaces
function checkStringSpaces(string) {
    if (string.includes(" ")) {
        return true;
    } else {
        return false;
    }
}

// 61. Minimal IV: if else if else Inferno
function positiveBooleans(number) {
    if (number === 0) return true;
    if (number > 0) return "positive";
    if (number < 0) return "negative";
}

// 62. Minimal VI : else if
function areTrue(a, b) {
    if (a === true && b === true) {
        return "both"
    } else if (a === true && b === false) {
        return "first"
    } else if (a === false && b === true) {
        return "second"
    } else {
        return "neither"
    }
}

// 63. Equilibrium : Conditionals
function equilibrium(number) {
    if (number > 0) {
        return "positive"
    } else if (number < 0) {
        return "negative"
    } else {
        return true;
    }
}

// 64. Pair Management
function pairManagement(index1, index2) {
    var newArray = [index1, index2];
    return newArray;
}

// 65. Find the Index Part 2
function findTheIndex(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (array.includes(index)) {
            return array.indexOf(index)
        } else {
            return -1
        }
    }
}

//66. On / Off Switches
function onOffSwitches(number) {
    return Math.pow(2, number);
}

// 67. Kinetic Energy
function kineticEnergy(mass, velocity) {
    return Math.round((mass * 0.5) * Math.pow(velocity, 2));
}

//68. Find the bug, returning the container 
function getContainer(product) {
    let container
    switch (product) {
        case "Bread":
            container = "bag"
            break;
        case "Beer":
        case "Milk":
            container = "bottle"
            break
        case "Cerials":
            container = "box"
            break
        case "Eggs":
            container = "carton"
            break
        case "Candy":
            container = "plastic"
            break;
        case "Cheese":
            container = null
    }
    return container
}

//69. Sides of Rubix Cube
function sidesOfRubixCube(sides) {
    return Math.pow(sides, 2) * 6;
}
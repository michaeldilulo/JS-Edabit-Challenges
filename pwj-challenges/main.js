// Return the sum of two numbers 

function sumOfNumbers(num1, num2) {
    return num1 + num2;
}

console.log("Sum of Two Numbers", sumOfNumbers(2, 5))

// Convert Minutes to Seconds

function convertToSeconds(minutes) {
    return minutes * 60;
}

console.log("Convert to Seconds", convertToSeconds(7))

// Age In Seconds

function ageInSeconds(age) {
    // input my age
    // let age = 30
    // multiply it by 365 to get how many days ive been alive
    // age * 365 = 730
    // 24 hours in a day
    // 730 * 24
    // 60 minutes in an hour 
    // sum of 730 * 24 * 60
    // 60 seconds in a minute
    // sum of 730 * 24 * 60 * 60 = seconds alive
    return age * 365 * 24 * 60 * 60;
}

console.log("Age In Seconds", ageInSeconds(30));

// Return the first item in an array

let array = [1, 2, 3, 4, 5]
function firstItemInArray(array) {
    return array[0];
}

console.log("First Item In Array", firstItemInArray(array))
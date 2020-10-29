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


// less than or equal to 7 Conditionals
let goodMoviesArray = [];
let badMoviesArray = [];
let badMovieRating = 6;
let goodMovieRating = 7;

function goodOrBad(number, string) {
    if (number <= badMovieRating) {
        return badMoviesArray.push(string);
    } else {
        return goodMoviesArray.push(string)
    }
}

console.log("Good Movies Array", goodMoviesArray)
console.log("Bad Movies Array", badMoviesArray)
console.log("Movie Rating", goodOrBad(5, "Little House on the Prairie"))
console.log("Movie Rating", goodOrBad(10, "Scooby Doo"))
console.log("Movie Rating", goodOrBad(7, "Shawshank Redemption"))
console.log("Movie Rating", goodOrBad(2, "The Village"))

// Check if a string is empty

function stringEmpty(string) {
    return string === "" ? true : false;
}

console.log("String Empty", stringEmpty("Hello World"))
console.log("String Empty", stringEmpty(""))
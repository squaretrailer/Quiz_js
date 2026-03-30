//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function checkNumbers(num1, num2) {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumbers(50, 10)); // true
console.log(checkNumbers(20, 30)); // true
console.log(checkNumbers(10, 20)); // false
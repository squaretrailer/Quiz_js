//Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checkLastDigit(num1, num2, num3) {
    var lastDigit1 = num1 % 10;
    var lastDigit2 = num2 % 10;
    var lastDigit3 = num3 % 10;
    return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
}
console.log(checkLastDigit(123, 456, 789)); // false
console.log(checkLastDigit(123, 456, 783)); // true
console.log(checkLastDigit(10, 20, 30)); // true
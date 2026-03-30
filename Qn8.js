//Write a JavaScript program to check whether all the digits in a given number are the same or not.
function checkSameDigits(num) {
    var strNum = num.toString();
    var firstDigit = strNum.charAt(0);
    for (var i = 1; i < strNum.length; i++) {
        if (strNum.charAt(i) !== firstDigit) {
            return false;
        }
    }
    return true;
}
console.log(checkSameDigits(1111)); // true
console.log(checkSameDigits(1234)); // false
console.log(checkSameDigits(9999)); // true
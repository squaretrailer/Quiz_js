//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function swapFirstAndLast(str) {
    if (str.length < 1) {
        return str;
    }
    var firstChar = str.charAt(0);
    var lastChar = str.charAt(str.length - 1);
    var middle = str.slice(1, str.length - 1);
    return lastChar + middle + firstChar;
}
console.log(swapFirstAndLast("hello")); // "oellh"
console.log(swapFirstAndLast("world")); // "dorlw"
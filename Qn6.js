//Write a JavaScript program to find the largest of three given integers
function findLargest(num1, num2, num3) {
    var largest = num1;
    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}
console.log(findLargest(10, 20, 30)); // 30
console.log(findLargest(50, 40, 30)); // 50
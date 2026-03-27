//Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
function differenceFrom13(num) {
  let difference = num - 13;

  if (num > 13) {
    // If number is greater than 13, return double the absolute difference
    return Math.abs(difference) * 2;
  } else {
    // Otherwise, just return the difference
    return difference;
  }
}

// Test cases
console.log("Number: 20 → Result:", differenceFrom13(20));
console.log("Number: 5 → Result:", differenceFrom13(5));
/*const numbers = [1, 2, 3, 4, 5];
for (let numbers of numbers) {
    if (numbers === 3) {
        console.log("Found 3!");
        break; // Exit the loop immediately
    }
    console.log(numbers);
}

*/

/*let fruits;
fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: undefined
*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    if (num % 2 === 0) {
       continue; // Skip even numbers
    }

    console.log(num); // Process only odd numbers
}
*/

let sales = [
  {item: 'widget', qty: 2},
  {item: 'gadget', qty: 5}
];

let inventory = {
  widget: 100,
  gadget: 50
};

let i = 0;

while (i < sales.length) { 
  let sale = sales[i]; 
  inventory[sale.item] -= sale.qty;
  i++;
}

console.log(inventory); // Output: { widget: 98, gadget: 45 }
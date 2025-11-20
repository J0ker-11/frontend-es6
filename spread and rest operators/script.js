
const arr = [1, 2, 3, 4, 5];

// Using Spread Operator to create a new array with additional elements
const newArr = [...arr, 6, 7, 8];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Using Rest Operator in a function to accept variable number of arguments
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Calling the function with multiple arguments
const total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15
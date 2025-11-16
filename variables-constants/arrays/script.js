
const foods = ['apple', 'banana', 'carrot'];
console.log(foods)

// Food item at index 0: apple
// Food item at index 1: banana
// Food item at index 2: carrot
console.log(foods[1])

// Adding an item to the end of the array
foods.push('date'); // Adding 'date' to the end of the array
console.log(foods); // Output: ['apple', 'banana', 'carrot', 'date']

// Removing the last item from the array
const lastFood = foods.pop(); // Removes 'date'
console.log(lastFood); // Output: 'date'
console.log(foods); // Output: ['apple', 'banana', 'carrot']

// Finding the index of an item
const carrotIndex = foods.indexOf('carrot');
console.log(carrotIndex); // Output: 2

// Iterating over the array
foods.forEach((food, index) => {
    console.log(`Food item at index ${index}: ${food}`);
});
// Output; 



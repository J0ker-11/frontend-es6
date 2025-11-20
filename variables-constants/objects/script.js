
const names = {
  firstName: "Tijani",
  lastName: "Hassan",
  age: 30,
  occupation: "Developer"
};

console.log(names.firstName); // Output: Tijani
console.log(names['lastName']); // Output: Hassan

// Adding a new property to the object
names.country = "Nigeria";
console.log(names.country); // Output: Nigeria

// Modifying an existing property
names.age = 31;
console.log(names.age); // Output: 31

// Deleting a property from the object
delete names.occupation;
console.log(names.occupation); // Output: undefined

// Iterating over the object properties
for (const key in names) {
  if (names.hasOwnProperty(key)) {
    console.log(`${key}: ${names[key]}`);
  }
}

// Output:
// firstName: Tijani
// lastName: Hassan
// age: 31
// country: Nigeria

// Task
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Black"
}

const {brand, year} = car;
console.log(`Car Brand: ${brand}, Year: ${year}`); // Output: Car Brand: Toyota, Year: 2020

// Task 2
const students = [
  {name: "Sam", score: 80},
  {name: "Joy", score: 90},
  {name: "Mike", score: 70}
]

console.log(students[1].name)

students.map(student => {
  console.log(` ${student.score}`)
})
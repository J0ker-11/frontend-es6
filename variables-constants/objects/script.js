
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
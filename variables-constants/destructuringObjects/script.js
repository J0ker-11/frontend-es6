
const id = 1;
const productName = "Laptop";
const rating = 5;

const product = {
    id,
    productName,
    rating
}

console.log(product)

// Output:
// {
//   id: 1,
//   productName: "Laptop",
//   rating: 5
// }

// Destructuring Objects

const user = {
    username: "john_doe",
    email: "johndoe@gmail.com",
    country: "USA"
};

// Destructuring assignment
const { username, email, country } = user;
console.log(username); // Output: john_doe
console.log(email);    // Output:   #

// Output: USA

// Destructuring with different variable names
const { username: user_name, email: user_email } = user;
console.log(user_name);  // Output: john_doe
console.log(user_email); // Output:

// Destructuring with default values
const { city = "Unknown" } = user;
console.log(city); // Output: Unknown

// Destructuring in function parameters
function displayUserInfo({ username, email }) {
    console.log(`Username: ${username}, Email: ${email}`);
}

// Calling the function with the user object
displayUserInfo(user); // Output: Username: john_doe, Email:

// Username: john_doe, Email:

// Nested Object Destructuring
const employee = {
    name: "Jane Smith",
    position: "Manager",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

// Destructuring nested objects
const { address: { street, city: empCity } } = employee;
console.log(street); // Output: 123 Main St
console.log(empCity); // Output: New York
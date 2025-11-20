// Template Literals allow for easier string interpolation and multi-line strings

const name = 'Alice';
const age = 30;

// Using Template Literals to create a greeting message
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;


// Using Template Literals for multi-line strings
const multiLineString = `This is a string's first line.
This is the second line.
And this is the third line.`;

console.log(greeting);
console.log(multiLineString);


// TENARY OPERATOR WITH TEMPLATE 

const showRecipeOne = true;

function getRecipeOne(recipeName) {
    return recipeName
}

function getRecipeTwo(recipeName) {
    return recipeName
}

const recipeName = showRecipe ? getRecipeOne('Pancakes') : getRecipeTwo('Woffles');
console.log(recipeName)



const showRecipe = false;
const recipeMessage = `Recipe: ${showRecipe ? '1 cup of sugar, 2 cups of flour' : 'Recipe is hidden'}`;

console.log(recipeMessage); // Output depends on showRecipe value





const isMember = true;
const membershipMessage = `Membership status: ${isMember ? 'Active Member' : 'Guest'}`;

console.log(membershipMessage);
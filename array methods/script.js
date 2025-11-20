//  map, filter, find, reduce, some, every, foeEach, includes, indexOf, lastIndexOf

const personArray = [
  {
    name: "Person",
    age: 25,
    occupation: "Developer",
    country: "USA",
  },
  {
    name: "Person One",
    age: 25,
    occupation: "Developer",
    country: "RUSSIA",
  },
  {
    name: "Person Two",
    age: 25,
    occupation: "Developer",
    country: "CANADA",
  },
  {
    name: "Person Three",
    age: 25,
    occupation: "Developer",
    country: "TURKEY",
  },
  {
    name: "Person Four",
    age: 25,
    occupation: "Developer",
    country: "NIGERIA",
  },
  {
    name: "Person Five",
    age: 25,
    occupation: "Developer",
    country: "GERMANY",
  },
];

// Map

let getAllNames = personArray.map((person, index) => {
  console.log(person, index);
  return `${index + 1}. ${person.name} from ${person.country}`;
});

// Filter

let filterCountries = personArray.filter((person,index) => {
    //console.log(filterCountries,index)
  return person.country.startsWith("N");
});

// Find

let findPerson = personArray.find((person) => {
   // console.log(findPerson)
  return person.country === "CANADA";
});


// Every
let allFromUSA = personArray.every((person) => {
  return person.country === "USA";
}   );

// Some
let someFromUSA = personArray.some((person) => {
  return person.country === "USA";
}   );

// Reduce
let totalAge = personArray.reduce((accumulator, person) => {
  return accumulator + person.age;
}, 0);
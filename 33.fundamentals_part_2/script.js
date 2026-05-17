'use strict'; // activate strict mode: it has to be the very first statement of the script

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
}

console.log(jonas)
console.log(`${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is called ${jonas.friends[0]}`);
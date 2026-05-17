'use strict'; // activate strict mode: it has to be the very first statement of the script

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age
    },
    getSummary: function () {
        // we need to call this.calcAge because otherwise, if it is not called, the age will be undefined unless the function is called before the getSummary method is called
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and has ${this.hasDriverLicense ? 'a' : 'not'} a driver's license.`
    }
};

console.log(jonas)
console.log(`${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is called ${jonas.friends[0]} `);
console.log(jonas.getSummary());
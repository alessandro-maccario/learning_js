'use strict';

/**
 * This function is defined in the top-level scope (global scope) and that is because it is in the
 * top-level code. This function also creates its own scope and that scope will
 * be equivalent to the variable environment to its execution context.
 * @param {*} birthYear
 * @returns
 */
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  // it creates a new scope
  function printAge() {
    const output = `You are of age ${age}, born in ${birthYear}.`;
    console.log(output);

    // this is a block scope
    if (birthYear > 1981 && birthYear < 1986) {
      const strAgeRange = `Oh, and you are a Millennial, ${firstName}`;
      console.log(strAgeRange);
    }
  }

  printAge();

  return age;
}

// global variable: through the scope chain, it will be made available inside the calcAge function as well
const firstName = 'Jonas';
calcAge(1991);

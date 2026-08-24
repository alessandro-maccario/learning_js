'use strict';

// select elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');

// starting conditions
// set the initial condition of score elements to be 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// at the beginning of the game, add hidden class to the dice picture
diceElement.classList.add('hidden');

/**
 * Define a random dice number between 1 and 6
 * @return {Number}
 */
let pseudoRandomNumberGenerator = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

// game functionalities
// 1. USER ROLLS DICE
document.querySelector('.btn--roll').addEventListener('click', function () {
  // store the random dice number generated into the randomDiceNumber variable
  const randomDiceNumber = Number(document.querySelector('.guess').value);

  if (!randomDiceNumber === 1) {
    // 1. add the random number to the score value of the player
    // 2. display the new score
    // 3.
  } else {
    // if it is equal to 1, change player
  }
});

// 2. USER HOLDS DICE
document.querySelector('.btn--hold').addEventListener('click', function () {});

// 3. USER RESETS GAME
document.querySelector('.btn--new').addEventListener('click', function () {});

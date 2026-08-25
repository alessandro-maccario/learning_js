'use strict';

// select elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.getElementById('current--0');
const current1ELement = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
// set the initial condition of score elements to be 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// define current score for player 1 and player 2
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// at the beginning of the game, add hidden class to the dice picture
diceElement.classList.add('hidden');

/**
 * Define a random dice number between 1 and 6
 * @return {Number}
 */
let pseudoRandomNumberGenerator = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

// GAME FUNCTIONALITIES
// 1. USER ROLLS DICE
btnRoll.addEventListener('click', function () {
  // store the random dice number generated into the randomDiceNumber variable
  let randomDiceNumber = pseudoRandomNumberGenerator();

  // remove the hidden class to display the first dice
  diceElement.classList.remove('hidden');
  // display the dice face
  document.querySelector('.dice').src = `dice-${randomDiceNumber}.png`;

  if (randomDiceNumber !== 1) {
    // 1. add the random number to the score value of the player
    currentScore += randomDiceNumber;
    // 2. display the new score dynamically based on the current active player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    console.log(randomDiceNumber);
  } else {
    console.log(randomDiceNumber);
    // switch player focus by first removing the player active class, then removing it
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    // if the dice value is equal to 1, change player
    document.querySelector('.dice').src = `dice-${randomDiceNumber}.png`;
    // switch active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // reset the score for the new player before adding the new dice roll
    currentScore = 0;
    // display the new score dynamically based on the current active player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
});

// 2. USER HOLDS DICE
document.querySelector('.btn--hold').addEventListener('click', function () {
  // add current score to total score
  // if score >= 100 current player wins!
});

// 3. USER RESETS GAME
document.querySelector('.btn--new').addEventListener('click', function () {
  // set all scores to 0 and set player1 as starting player
});

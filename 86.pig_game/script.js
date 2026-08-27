'use strict';

// select elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
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
let scores = [0, 0];
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

/**
 * Reset all variables before starting a new game
 */
function resetVariables() {
  // reset all the variables
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1ELement.textContent = 0;
  return (
    scores,
    score0Element,
    score1Element,
    current0Element,
    current1ELement
  );
}

/**
 * Player switching function
 */
const switchPlayer = function (currentActivePlayer) {
  // reset the score for the new player before adding the new dice roll
  currentScore = 0;

  // switch player focus by first removing the player active class, then removing it
  document
    .querySelector(`.player--${currentActivePlayer}`)
    .classList.remove('player--active');

  // reset current score of the current player before switching to the new one
  document.getElementById(`current--${currentActivePlayer}`).textContent =
    currentScore;

  // switch active player
  const nextPlayer = currentActivePlayer === 0 ? 1 : 0;

  // define the active player
  document
    .querySelector(`.player--${nextPlayer}`)
    .classList.add('player--active');

  // display the new current score dynamically based on the current active player
  document.getElementById(`current--${nextPlayer}`).textContent = currentScore;

  return nextPlayer;
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
  } else {
    // switch player
    activePlayer = switchPlayer(activePlayer);

    // if the dice value is equal to 1, change player
    document.querySelector('.dice').src = `dice-${randomDiceNumber}.png`;
  }
});

// 2. USER HOLDS DICE
document.querySelector('.btn--hold').addEventListener('click', function () {
  // add current score to total score
  // if score >= 50 current player wins!

  // add to the current score element of the current active player the currentScore
  scores[activePlayer] += currentScore;
  // display the current score at the current active player score position on the screen
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 50) {
    alert(`Player ${activePlayer + 1} wins!`);

    // reset all the variables
    resetVariables();
  }

  // switch player
  activePlayer = switchPlayer(activePlayer);
});

// 3. USER RESETS GAME
document.querySelector('.btn--new').addEventListener('click', function () {
  // reset all the variables available on the screen
  resetVariables();
});

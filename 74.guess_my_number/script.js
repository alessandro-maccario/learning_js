'use strict';

// good practice is to have the data in the code and not directly changing the data in the DOM
// we want all of our data to be available in the code, not just in the DOM. This value, for instance,
// is called a "state" value because it is part of the "application state"
let score = 20;
let highscore = 0;

/**
 * Define the number to which the user's input will be compared to. Numbers from 0 to 20
 * @return {Number}
 */
let pseudoRandomNumberGenerator = function () {
  return Math.trunc(Math.random() * 21);
};

/**
 * Display a custom message instead of the value in the class .message
 * @param  {String} message The string to be displayed
 * @return {String}      Output the message string
 */
function displayMessage(message) {
  return (document.querySelector('.message').textContent = message);
}
let randomNumber = pseudoRandomNumberGenerator();
console.log('random number is', randomNumber);

// Anonymous handler function as it does not have a name
document.querySelector('.check').addEventListener('click', function () {
  // store the guessed value into the guess variable. Convert to Number as almost any user inputs will be a string, by default
  const guess = Number(document.querySelector('.guess').value);

  // check if the user inserted any value. Use isNaN if 0 is checked as 0 is a falsy value in JS
  if (isNaN(guess)) {
    displayMessage('Missing value!');
  } else {
    console.log('Guess is ', guess);

    // check if the guess is the same as the random number, if yes, the user won
    if (guess === randomNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      // increase the width of the correct number guessed
      document.querySelector('.number').style.width = '30rem';
      displayMessage('🎉 Correct number!');
      document.querySelector('.number').textContent = guess;
      // set highscore depending on the score itself: the higher the score, the higher the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // otherwise, the guess is wrong, therefore reduce the score and game over if score < 1
      // number too low!
    } else if (guess !== randomNumber) {
      if (score > 1) {
        // ternary operator to display a message depending if the guess is higher or lower than the secret number
        displayMessage(
          guess > randomNumber ? '⬆️ Number too high!' : '⬇️ Number too low!',
        );
      }
      // in both cases, the guess is wrong and the score should be decreased
      --score;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = '#fa1616';
      // if score < 1, then just display 0 because the user lost
      document.querySelector('.score').textContent = 0;
      displayMessage('...Game Over...');
    }
  }
});

/* 

Implement a game reset functionality, so that the player can make a new guess! Here is how:
  1. Select the element with the "again" class and attach a click event handler
  2. In the handler function, restore initial values of the score and number variables
  3. Restore the initial conditions of the message, number, score and guess input field
  4. Also restore the original background color (#222) and number (15rem)

*/

// Anonymous handler function as it does not have a name
// Activate 'Again' button to let the user play again
document.querySelector('.again').addEventListener('click', function () {
  // reset the score value, number and message
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  // reassign the pseudoRandomNumber to which the user's input will be compared to. Numbers from 0 to 20
  randomNumber = pseudoRandomNumberGenerator();
  console.log('New random number is: ', randomNumber);
  // restore background color
  document.querySelector('body').style.backgroundColor = '#222';
  // restore the width of the hidden random number
  document.querySelector('.number').style.width = '15rem';
  // reset the user guess
  document.querySelector('.guess').value = '';
});

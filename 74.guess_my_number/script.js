'use strict';

// define the number to which the user's input will be compared to. Numbers from 0 to 20
const pseudoRandomNumber = Math.trunc(Math.random() * 21);
// good practice is to have the data in the code and not directly changing the data in the DOM
// we want all of our data to be available in the code, not just in the DOM. This value, for instance,
// is called a "state" value because it is part of the "application state"
let score = 20;
console.log('random number is', pseudoRandomNumber);

document.querySelector('.check').addEventListener('click', function () {
  // store the guessed value into the guess variable. Convert to Number as almost any user inputs will be a string, by default
  const guess = Number(document.querySelector('.guess').value);

  // check if the user inserted any value
  if (!guess) {
    document.querySelector('.message').textContent = 'Missing value!';
  } else {
    console.log('Guess is ', guess);
    // check if the guess is the same as the random number, if yes, the user won
    if (guess === pseudoRandomNumber) {
      document.querySelector('body').style.backgroundColor = '#20c007';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('.number').textContent = guess;
      // otherwise, the guess is wrong, therefore reduce the score and game over if score < 1
      // number too low!
    } else if (guess < pseudoRandomNumber) {
      document.querySelector('.message').textContent = '⬇️ Number too low!';
      if (score > 1) {
        --score;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('body').style.backgroundColor = '#fa1616';
        // if score < 1, then just display 0 because the user lost
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '...Game Over...';
      }
      // number too high!
    } else {
      document.querySelector('.message').textContent = '⬆️ Number too high!';
      if (score > 1) {
        --score;
        document.querySelector('.score').textContent = score;
      } else {
        document.body.style.backgroundColor = '#fa1616';
        // if score < 1, then just display 0 because the user lost
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = '...Game Over...';
      }
    }
  }
});

'use strict';

// define the number to which the user's input will be compared to. Numbers from 0 to 20
const pseudoRandomNumber = Math.floor(Math.random() * 21);
console.log('random number is', pseudoRandomNumber);

document.querySelector('.check').addEventListener('click', function () {
  // store the guessed value into the guess variable. Convert to Number as almost any user inputs will be a string, by default
  const guess = Number(document.querySelector('.guess').value);

  // check if the user inserted a value
  if (!guess) {
    document.querySelector('.message').textContent = 'Missing value!';
  } else {
    console.log('Guess is ', guess);
    // check if the guess is the same as the random number, if yes, the user won
    if (guess === pseudoRandomNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number!';
    } else if (guess < pseudoRandomNumber) {
      document.querySelector('.message').textContent = '⬇️ Number too low!';
    } else {
      document.querySelector('.message').textContent = '⬆️ Number too high!';
    }
  }
});

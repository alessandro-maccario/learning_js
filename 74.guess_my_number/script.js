'use strict';

document.querySelector('.check').addEventListener('click', function () {
  // store the guessed value into the guess variable. Convert to Number as almost any user inputs will be a string, by default
  const guess = Number(document.querySelector('.guess').value);

  // check if the user inserted a value
  if (!guess) {
    document.querySelector('.message').textContent = 'Missing value!';
  } else {
    console.log('Guess is ', guess);
  }
});

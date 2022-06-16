'use strict';

// Function to check on enter
var input = document.querySelector('.guess');
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.check').click();
  }
});

// VARIABLE FOR THE SECRET NUMBER
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// VARIABLE FOR SCORE
let score = 20;

// VARIABLE FOR HIGHSCORE
let highScore = '0';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayTitle = function (title) {
  document.querySelector('.title').textContent = title;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Well done, you guessed correct!');

    displayTitle('Winner winner chicken dinner');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You lose!');
      displayTitle('Booo...');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

// play again

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  displayTitle('Guess My Number!');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// document.querySelector('.hard').addEventListener('click', function () {
//   document.querySelector('.hard').textContent = 'Easy Mode';
//   document.querySelector('.score').textContent = '10';
//   score = 10;
//   secretNumber = Math.trunc(Math.random() * 30) + 1;
//   displayMessage('Start guessing...');
//   // document.querySelector('.score').textContent = '200';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   displayTitle('Guess My Number!');

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// const reloadtButton = document.querySelector('.hard');
// // Reload everything:
// function reload() {
//   reload = location.reload();
// }
// // Event listeners for reload
// reloadtButton.addEventListener('click', reload, false);

// Form

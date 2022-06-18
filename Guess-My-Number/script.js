'use strict';

// FORM

// Get data

const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');

// Validate data
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = 'Name cannot be blank';
    nameInput.classList.add('error-border');
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = 'Invalid email address';
    email.classList.add('error-border');
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = 'Please enter message';
    message.classList.add('error-border');
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = 'Success!';
  }
}

// Check if email is valid
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}

// Clear error
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = '';
  }
  success.innerText = '';
  nameInput.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
}

// Function to check on enter
var input = document.querySelector('.guess');
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.check').click();
  }
});

// reload page when guessed correctly

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
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  displayTitle('Guess My Number! Easy Mode');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.hard').addEventListener('click', function () {
  document.querySelector('.score').textContent = '10';
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.between').textContent = '(Between 1 and 30)';
  displayTitle('Guess My Number! Hard Mode');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

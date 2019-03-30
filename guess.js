/*Player must guess a number between a min and max
Player gets a certain number of guesses
notify player of guess remaining
Notify the player of the correct answer if loose
Let player choose to play again*/


//Game value

let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;

//UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNUm = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNUm.textContent = max;

//Listen for guess

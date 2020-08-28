var randomNumber = Math.floor(Math.random()*100)+1;
var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessCount=1;
guessField.focus();

guessSubmit.addEventListener('click', checkGuess)

function checkGuess() {
    if(guessCount===1) {
        guesses.textContent='Previous guesses:'
    }
    var userGuess=Number(guessField.value);
    if(userGuess===randomNumber) {
        lastResult.textContent='Congratulations!';
        lastResult.style.backgroundColor='green';
        lowOrHi.textContent=' ';
        setGameOver();
    } else if (guessCount===10) {
        lastResult.textContent='Game Over!';
        lastResult.style.backgroundColor='red';
        setGameOver();
    } else {
        lastResult.textContent='Wrong!';
        lastResult.style.backgroundColor='red';
        if (userGuess<randomNumber) {
            lowOrHi.textContent='Too low!'
        } else {
            lowOrHi.textContent='Too high!'
        }
        guessField.value='';
    }
    guesses.textContent+=userGuess + ' ';
    guessCount++;
    guessField.focus();
}

function setGameOver() {
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='Reset';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', reset);
}
function reset() {
    lastResult.textContent='';
    lastResult.style.backgroundColor='white';
    guessField.value='';
    lowOrHi.textContent='';
    guesses.textContent='';
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessCount=1;
    resetButton.parentNode.removeChild(resetButton);
    randomNumber = Math.floor(Math.random()*100)+1;
}
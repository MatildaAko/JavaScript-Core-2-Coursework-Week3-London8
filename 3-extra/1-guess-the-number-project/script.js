//let randomNumber;
let result = document.querySelector(".final-output");
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
}
generateRandomNumber();
let tries = 0;
let triesLeft = 7;
function guessNumber() {
  
  //Collect input from the user
  let guess = parseInt(document.querySelector(".inputs-Values").value);
  if (triesLeft === 0 && guess != randomNumber) {
    result.textContent = `You Lose, the number was ${randomNumber}`;
    return;
  }
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess > 100 || guess === "") {
    result.textContent = "Please enter a number between 1 and 100";
  }

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (randomNumber < guess) {
    tries++;
    triesLeft--;
    result.textContent = `Remaining Tries: ${triesLeft} \n${guess} is too high, try again`;
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (guess < randomNumber) {
    tries++;
    triesLeft--;
    result.textContent = `Remaining Tries: ${triesLeft} \n${guess} is too low, try again`;
  }
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else if (guess == randomNumber) {
    tries++;
    result.textContent = `It took you ${tries} tries ${randomNumber} is correct. You win!!!`;
  }
  
  
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  generateRandomNumber();
  guessNumber();
  //Reset users input field
  let inputField = document.querySelector(".inputs-Values");
  inputField.value = "";
  result.textContent = "Please enter a number between 1 and 100 to start";
  //Reset tries, and triesTaken by the user
  tries = 0;
  triesLeft = 7;
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);

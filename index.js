const wordBank = require("./word-bank.json");
const prompt = require("readline-sync");
const hangman = [" O", " |", " Y", " |", " |", " ^"];

//tests to see if user input is a valid
const isValidInput = (userGuess) => {
  if(userGuess.length > 1){
      console.log(" You can only enter one letter. \nHave you ever played hangman before?");
      return false;
  }


if (/[a-zA-Z]/.test(userGuess)) {
    return true;
  } else if (/[^a-zA-Z]/.test(userGuess)) {
    console.log(" That's not a letter bonehead");
    return false;
  }
};

//plays a single hangman game

const hangmanGame = () => {
  console.log(
    ` \nHey ${userName}! Thanks for playing. Let's get started. \nEnter your first letter!`
  );
  let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  let dashes = [];

  chosenWord.split("").forEach((character) => {
    dashes.push(`_`);
  });
  console.log(dashes);

  let guessedLetters = [];
  let incorrectGuesses = 0;

  while (dashes.includes("_") && incorrectGuesses < 6) {
    let userGuess = prompt.question("").toLowerCase();
    let guessPosition = chosenWord.indexOf(userGuess);

    if (guessPosition === -1) {
      console.log(` No ${userName}, ${userGuess} is not in the word. Try again`);
      if (!isValidInput(userGuess)) {
       
      } else if (!guessedLetters.includes(userGuess)) {
        incorrectGuesses++;
      }
    } else {
      dashes = dashes.map((dashOrLetter, index) => {
        if (chosenWord[index] === userGuess) {
          return chosenWord[index];
        } else {
          return dashOrLetter;
        }
      });
    }
    guessedLetters.push(userGuess);

    //loops through hangman array for body parts
    console.log("\n");
    for (let i = 0; i < incorrectGuesses; i++) {
      console.log(hangman[i]);
    }
    console.log("\n");
    console.log(dashes.join(" "));
  }

  roundsPlayed++;
  if (incorrectGuesses >= 6) {
    console.log(
      ` You lose ${userName}, the answer was "${chosenWord}". \nYou're kind of dumb. Try again to get smarter.`
    );
  } else {
    roundsWon++;
    console.log(" Congratulations!! You're smarter than most 3 year olds.");
  }
};

let startGame = prompt.question(
  " Welcome to hangman! To start a game: Press Enter. To exit the game: Press ctrl+c "
);
console.log(startGame);
let userName = prompt.question("May I have your name please? ");

while (!userName) {
  userName = prompt.question("You have to enter a name Silly!! ");
}

let roundsPlayed = 0;
let roundsWon = 0;

while (true) {
  hangmanGame();
  console.log(` Games played: ${roundsPlayed} \nGames won: ${roundsWon}`);
  let StartNewGame = prompt.question(
    " To start a new game, press enter. To exit, press ctrl + c"
  );
  console.log(StartNewGame);
}

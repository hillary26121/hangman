const wordBank = require("./word-bank.json");
// const wordBank = ['apple'];
const prompt = require('readline-sync');
const hangman = ['O', '\|', '/', '\\', '\_', '_'];


    let startGame= prompt.question('Welcome to hangman! To exit the game: Press ctrl+c ');
    console.log(startGame);
    let userName = prompt.question('May I have your name please? ');


    while(!userName){
      userName = prompt.question('You have to enter a name Silly!! ');    
    }
  
    
const hangmanGame = () => {  
    console.log(`\nHey ${userName}! Thanks for playing. Let's get started. \nEnter your first letter!`)
    let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    let dashes = [];

    chosenWord.split('').forEach( (character)=>{
        dashes.push(`_`); 
   
    });
    console.log(dashes);


   
    let guessedLetters = [];
    let incorrectGuesses = 0;

    while(dashes.includes("_") && incorrectGuesses < 6){ 
    let userGuess = prompt.question("");
    let guessPosition = chosenWord.indexOf(userGuess);

    if(guessPosition === -1){
       
        console.log(`No ${userName}, ${userGuess} is not a letter. Try again`);
        if(!guessedLetters.includes(userGuess)){
            incorrectGuesses++;
        }
    } else {
        dashes = dashes.map( (dashOrLetter, index)=>{
            if(chosenWord[index] === userGuess){
            return chosenWord[index];
            } else {
                return dashOrLetter;
            }
        })
      
    }
    guessedLetters.push(userGuess);
    console.log(dashes.join(' ') );
  }

roundsPlayed++;
if(incorrectGuesses >= 6){
    console.log(`You lose ${userName}, the answer was "${chosenWord}". \nYou're kind of dumb. Try again to get smarter.`);
} else{
    roundsWon++;
    console.log("Congratulations!! You're smarter than most 3 year olds.")
}




}

let roundsPlayed = 0;
let roundsWon = 0;

while(true){
    hangmanGame();
    console.log(`Games played: ${roundsPlayed} \nGames won: ${roundsWon}`);
    let StartNewGame = prompt.question('To start a new game, press enter. To exit, press ctrl + c')
    console.log(StartNewGame);  
    
}


//needs multiple rounds
//case insensitive, has to be a letter







// let remainingLetters = chosenWord;
// while(remainingLetters > 0){
//     console.log(hi);
// }


// let userGuess = "";
// while(userGuess !== chosenWord){
//     userGuess = prompt.question(dashes);
// }













// if (/[a-zA-Z]/.test(userInput)) {
//     // Do something in here
//     console.log("This is a letter");
//   } else if (/[^a-zA-Z]/.test(userInput)) {
//     // Do something here
//     console.log("This is NOT a letter");
//   }

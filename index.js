// const wordBank = require("./word-bank.json");
const wordBank = ['apple'];
const prompt = require('readline-sync');

let startGame= prompt.question('Welcome to hangman! To exit the game: Press ctrl+c ');
console.log(startGame);
let userName = prompt.question('May I have your name please? ');


while(!userName){
   userName = prompt.question('You have to enter a name Silly!! ');
}
console.log(`Hey ${userName}! Thanks for playing. Let's get started. \nEnter your first letter!`)

let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let dashes = [];

chosenWord.split('').forEach( (character)=>{
    dashes.push(`_`); 
   
});
console.log(dashes);

let userGuess = prompt.question("");
let guessPosition = chosenWord.indexOf(userGuess);
if(guessPosition === -1){
    console.log(`No ${userName}, ${userGuess} is not a letter. Try again`);
} else {
    //Set letter
    dashes = dashes.map( (dashOrLetter, index)=>{
        if(chosenWord[index] === userGuess){
            return chosenWord[index];
        } else {
            return dashOrLetter;
        }
    })
    //join and display dashes to user
    console.log(dashes.join(' ') );
}









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

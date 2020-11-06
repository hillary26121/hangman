const wordBank = require("./word-bank.json");
const prompt = require('readline-sync');

let startGame= prompt.question('Welcome to hangman! To exit the game: Press ctrl+c ');
console.log(startGame);
let userName = prompt.question('May I have your name please? ');


while(!userName){
   userName = prompt.question('You have to enter a name Silly!! ');
}
console.log(`Hey ${userName}! Thanks for playing. Let's get started. \nEnter your first letter!`)

let chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
let dashes = "";

chosenWord.split('').forEach( (character)=>{
    dashes = `${dashes} _ `
});
console.log(dashes);













// if (/[a-zA-Z]/.test(userInput)) {
//     // Do something in here
//     console.log("This is a letter");
//   } else if (/[^a-zA-Z]/.test(userInput)) {
//     // Do something here
//     console.log("This is NOT a letter");
//   }

let choiceRPS = ['Rock', 'Paper', 'Scissor'];
function getComputerChoice() {
    return(choiceRPS[(Math.floor(Math.random() * choiceRPS.length))]);
}

let playerSelection = prompt('Choose Rock, Paper, or Scissor');
let computerSelection = getComputerChoice();
function singleMatch (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper'){
        return 'You Lose! Paper beats Rock'
    }
}
console.log(singleMatch (playerSelection, computerSelection));
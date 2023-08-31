let choiceRPS = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return(choiceRPS[(Math.floor(Math.random() * choiceRPS.length))]);
}

let playerSelection = prompt('Choose Rock, Paper, or Scissor');
const computerSelection = getComputerChoice();
function singleRoundGame (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        return `No one wins it's a draw`;

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';

    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        return 'You Win! Paper beats Scissor';

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';   

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        return `No one wins it's a draw`;

    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        return 'You Lose! Scissor beats Paper';

    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissor';   

    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        return 'You win! Scissor beats Paper';

    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'scissor') {
        return `No one wins it's a draw`;

    } else {
        return 'You did not enter a valid response'; 
    }
}
console.log(singleRoundGame (playerSelection, computerSelection));

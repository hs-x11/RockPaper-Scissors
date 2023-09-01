let choiceRPS = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return(choiceRPS[(Math.floor(Math.random() * choiceRPS.length))]);
}

let playerResponse = prompt('Choose Rock, Paper, or Scissor');
const computerSelection = getComputerChoice();
const playerSelection = playerResponse.toLowerCase();

function game() {
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return `No one wins it's a draw`;
    
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissor') || 
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissor' && computerSelection == 'paper')) {
            return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    
        } else if (
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissor') ||
            (playerSelection === 'scissor' && computerSelection === 'rock')) {
            return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    
        } else {
            return 'You did not enter a valid response'; 
        }
    }
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
}

for(rounds = 1; rounds <= 5; rounds++) {
    console.log(game());
}
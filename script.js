let choiceRPS = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
    return(choiceRPS[(Math.floor(Math.random() * choiceRPS.length))]);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie`;
    
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') || 
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissor' && computerSelection == 'paper')) {
        return `Player Win`;
            
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissor') ||
        (playerSelection === 'scissor' && computerSelection === 'rock')) {
        return `Computer Win`
    
    } else {
        return 'You did not enter a valid response'; 
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie') {
        return `No one wins it's a draw!`
    } else if (result == 'Player Win') {
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`

    } else if (result == 'Computer Win') {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
}

function playerResponse() {
    let validInput = false;
    while(validInput == false) {
        const promptChoice = prompt('Choose Rock, Paper, or Scissor');
        if(promptChoice == null) {
            continue;
        }
        const choiceLower = promptChoice.toLowerCase();
        if (choiceRPS.includes(choiceLower)) {
            validInput = true;
            return choiceLower;
        }

    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(rounds = 1; rounds <= 5; rounds++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerResponse();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection,computerSelection) == `Player Win`) {
            playerScore++;
        } else if (checkWinner(playerSelection,computerSelection) == `Computer Win`) {
            computerScore++;
        }
    }
    console.log('Game is over!')
    if (playerScore > computerScore) {
        console.log('You Win!');
    } else if (computerScore > playerScore) {
        console.log('Womp womp you lose');
    }
}

game()

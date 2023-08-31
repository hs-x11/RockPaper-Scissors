
function rpsMatch(playerSelection, computerSelection) {

}

let choiceRPS = ['Rock', 'Paper', 'Scissor'];
function getComputerChoice() {
    console.log(choiceRPS[(Math.floor(Math.random() * choiceRPS.length))]);
}
getComputerChoice()
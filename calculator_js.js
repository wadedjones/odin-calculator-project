// CALCULATE
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;
let compSelection = computerPlay();
let playerSelection = 'paper'


function computerPlay() {
    let randomPlay = Math.floor(Math.random() * 3);
    switch (randomPlay) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    };
};



function playRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        roundWinner = 'Tie!'
    }
    if (
        (playerSelection === 'rock' && compSelection === 'scissors') ||
        (playerSelection === 'paper' && compSelection === 'rock') ||
        (playerSelection === 'scissors' && compSelection === 'paper')
    ) {
        playerScore++;
        roundWinner = 'You Won!'
    }
    if (
        (compSelection === 'rock' && playerSelection === 'scissors') ||
        (compSelection === 'paper' && playerSelection === 'rock') ||
        (compSelection === 'scissors' && playerSelection === 'paper')
    ) {
        computerScore++
        roundWinner = 'Computer Won!'
    }
}

playRound('rock', compSelection)
console.log(roundWinner);

console.log(playerScore, computerScore)
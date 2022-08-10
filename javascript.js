
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomWord = choice[Math.floor(Math.random() * choice.length)];
    return randomWord;
  }
  
  

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return 'You lose, paper beats rock';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win, rock beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose, scissors beats ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win, ${playerSelection} beats ${computerSelection}`;
    } else (playerSelection  === computerSelection) 
        return `It's a tie, ${playerSelection} = ${computerSelection}`;
  }
  
  
  
    const playerSelection = prompt("What will you choose? 'Rock, Paper, Scissors'").toLowerCase()
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  
    console.log(computerSelection);


function game() {

}
    
    
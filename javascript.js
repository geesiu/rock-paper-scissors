
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomWord = choice[Math.floor(Math.random() * choice.length)];
    return randomWord;
  }
  
  

function playRound() {
    const playerSelection = prompt("What will you choose? 'Rock, Paper, Scissors'" ).toLowerCase()
    const computerSelection = getComputerChoice()
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
  
 
  
   
  


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult = playRound()

    for (let i = 0; i < 5; i++) {
        playRound();

        if (roundResult === 'You win, rock beats scissors' || roundResult === 'You win, paper beats rock' || roundResult === 'You win, scissors beats paper') {
            ++playerScore;
        } else if (roundResult === 'You lose, paper beats rock' || roundResult === 'You lose, scissors beats paper' || roundResult === 'You lose, rock beats scissors') {
            ++computerScore;
        }
     }
     
     if (playerScore > computerScore)  {
        return ('You win ' + playerScore + ' to ' + computerScore + '.');
     }  else if (playerScore < computerScore) {
        return ('You lose ' + computerScore + ' to ' + playerScore + '.');
     }  else {
        return 'It was a tie, both players have won the same number of rounds.';
     }
}  

console.log(game());






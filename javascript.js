
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomWord = choice[Math.floor(Math.random() * choice.length)];
    return randomWord;
  }
  
  
  
  
  
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === 'rock' && computerSelection === 'paper') {
          return 'lose';
      } 
  }
  
  
    
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  
    console.log(computerSelection);
    
    
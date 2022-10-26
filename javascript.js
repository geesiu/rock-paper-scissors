
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomWord = choice[Math.floor(Math.random() * choice.length)];
    return randomWord;
  }
  
  

  
  function playRound() {
    let computerSelection = getComputerChoice()

        if (this.innerHTML == "rock" && computerSelection == "scissors" || 
            this.innerHTML == "paper" && computerSelection == "rock" ||
            this.innerHTML == "scissors" && computerSelection == "paper") {
          results.textContent = `You win, ${this.innerHTML} beats ${computerSelection}`;
        } else if (this.innerHTML == computerSelection) {
            results.textContent = `It's a tie ${this.innerHTML} equals ${computerSelection}`;
        } else  {
          results.textContent = `${this.innerHTML} loses against ${computerSelection}`;
        };
      }
  
  
 

  const rock = document.querySelector('.rock'); 
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');
    

  const array = [rock, paper, scissors];
    for (let i = 0; i < array.length; i++) {
      array[i].addEventListener('click', playRound);    
    }
  
      
   const results = document.querySelector('.results');
  

   
 
 














  




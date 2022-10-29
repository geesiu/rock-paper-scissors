
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomWord = choice[Math.floor(Math.random() * choice.length)];
    return randomWord;
  }
  
  

  
  function playRound() {
    let computerSelection = getComputerChoice()

        if (this.textContent == "rock" && computerSelection == "scissors" || 
            this.textContent == "paper" && computerSelection == "rock" ||
            this.textContent == "scissors" && computerSelection == "paper") {
          results.textContent = `You win, ${this.textContent} beats ${computerSelection}`;
        } else if (this.textContent == computerSelection) {
            results.textContent = `It's a tie ${this.textContent} equals ${computerSelection}`;
        } else  {
          results.textContent = `${this.textContent} loses against ${computerSelection}`;
        };
      }
  
    
  const results = document.querySelector('.results');
  const rock = document.querySelector('.rock'); 
  const paper = document.querySelector('.paper');
  const scissors = document.querySelector('.scissors');
    

  const array = [rock, paper, scissors];
    for (let i = 0; i < array.length; i++) {
      array[i].addEventListener('click', playRound);    
    }

  
  
      
   
  

   
 





  




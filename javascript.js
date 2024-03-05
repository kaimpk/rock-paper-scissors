let playerScore = 0;
let computerScore  = 0;
let isGameOver = false;
    
    
   do {
    function checkGameOver(computerScore, playerScore){
        if(playerScore ===5){
            isGameOver= true;}
            else if(computerScore === 5)
            {
                isGameOver = true;
         }
         else{}
    }
     function getComputerChoice() { 
         let x = Math.floor(Math.random() *3)
         return x;
     }
     function playRound(playerSelection, computerSelection)
     {
         
          if(playerSelection === "rock" && computerSelection === 1){  console.log('You win! rock beats scissors!')
     playerScore++;} 
         else if(playerSelection === "scissors" && computerSelection === 0){  console.log('You win! scissors beats paper!')
          playerScore++; }    
         else if(playerSelection === "paper" && computerSelection === 2){ console.log('You win! rock beats paper!')
         playerScore++;}     
         else if(playerSelection === "scissors" && computerSelection === 2){ console.log('You lose! scissors beats rock!') 
     computerScore++;}
         else if(playerSelection === "paper" && computerSelection === 1){ console.log('You lose! paper beats scissors!') 
         computerScore++;}
         else if(playerSelection === "rock" && computerSelection === 0){ console.log("You lose! paper beats rock!") 
         computerScore++;}
         else {console.log("Draw!");}
             
         
     } 
     const computerSelection = getComputerChoice();
     const playerInput = prompt("Rock, Paper or Scissors?");
     let playerSelection = playerInput.toLowerCase();
     
     console.log(playRound(playerSelection, computerSelection))
     console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`)
     checkGameOver(computerScore, playerScore)
     
   } while (isGameOver === false);

playerScore === 5 ? console.log("player wins!") : console.log("computer wins!")
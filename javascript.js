let playerScore = 0;
let computerScore  = 0;
let isGameOver = false;

function checkGameOver(computerScore, playerScore){
    if(playerScore ===5){
        isGameOver= true
        return whenGameEnds(0);}
        else if(computerScore === 5)
        {
            isGameOver = true;
            
            return whenGameEnds(1);
     }
    }
    

const displayComputerChoice = (computerSelection) =>
{
    if(computerSelection === 0){
        computerChoice.textContent = "CPU CHOSE: PAPER"
        compDiv.appendChild(computerChoice);
        
    }else if (computerSelection === 1){
        computerChoice.textContent = "CPU CHOSE: SCISSORS"
        compDiv.appendChild(computerChoice);
    }
    else if(computerSelection === 2){
        computerChoice.textContent = "CPU CHOSE: ROCK"
        compDiv.appendChild(computerChoice);
    }
    
}

const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const results = document.querySelector('#results');
const winLose = document.createElement('p');
const playerS = document.createElement('p');
const computerS = document.createElement('p');
const winmes = document.querySelector('#winmes');
const computerChoice = document.createElement('p');
const compDiv = document.querySelector('#compChoice');
const winMessage = document.createElement('p');
winMessage.style.fontSize = '100px';

const whenGameEnds = (value) =>
{
    checkGameOver === 1 ? winMessage.textContent = 'PLAYER WINS' : winMessage.textContent = 'CPU WINS'
    winmes.appendChild(winMessage);
    scissors.removeEventListener('click', func)
    scissors.disabled= true;
    paper.removeEventListener('click', func)
    rock.removeEventListener('click',  func)
}

paper.addEventListener('click', () =>{
    playerSelection = "paper";
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection);
    winLose.textContent = playRound(playerSelection, computerSelection)
    checkGameOver(computerScore, playerScore);
    
})

scissors.addEventListener('click', () =>{
    playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection);
    winLose.textContent = playRound(playerSelection, computerSelection)
    checkGameOver(computerScore, playerScore);
    
})


rock.addEventListener('click', () =>{
    playerSelection = "rock";
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection);
    winLose.textContent = playRound(playerSelection, computerSelection);
    checkGameOver(computerScore, playerScore);
})
results.appendChild(playerS);
results.appendChild(computerS);
results.appendChild(winLose);

function getComputerChoice() { 
    let x = Math.floor(Math.random() *3)
    return x;
}
function playRound(playerSelection, computerSelection)
{
   
    if(playerSelection === "rock" && computerSelection === 1){ 
        playerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return 'You win! rock beats scissors!';
        
    } 
    else if(playerSelection === "scissors" && computerSelection === 0){  
        playerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return'You win! scissors beats paper!';
        }    
    else if(playerSelection === "paper" && computerSelection === 2){ 
        playerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return 'You win! rock beats paper!';
        }     
    else if(playerSelection === "scissors" && computerSelection === 2){ 
        computerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return'You lose! scissors beats rock!';
        }
    else if(playerSelection === "paper" && computerSelection === 1){ 
        computerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return 'You lose! paper beats scissors!'; 
       }
    else if(playerSelection === "rock" && computerSelection === 0){ 
        computerScore++;
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return "You lose! paper beats rock!";
        }
    else {
        computerS.textContent = `CPU SCORE: ${computerScore}`;
        playerS.textContent = `PLAYER SCORE: ${playerScore}`;
        return "Draw!";
    }
        
    
} 


function getComputerChoice() { 
    let x = Math.floor(Math.random() *3)
    return x;
}
function playRound(playerSelection, computerSelection)
{
    
    playerSelection === 2 && computerSelection === 1 ?  console.log('You win! rock beats scissors!') :
    playerSelection === 1 && computerSelection === 0 ?  console.log('You win! scissors beats paper!') :    
    playerSelection === 0 && computerSelection === 2 ? console.log('You win! rock beats paper!'):       
    playerSelection === 1 && computerSelection === 2 ? console.log('You lose! scissors beats rock!') :
    playerSelection === 0 && computerSelection === 1 ? console.log('You lose! paper beats scissors!') :
    playerSelection === 2 && computerSelection === 0 ? console.log("You lose! paper beats rock!") :
    console.log("Draw!");
        
    
}
const playerInput="rock";
let playerSelection;
switch(playerInput){
    case("rock") : playerSelection =2
    break;
    case("scissors"): playerSelection =1
    break;
    case("paper"): playerSelection =0
    break;
    default: console.log("nothing selected")
    break;
}
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

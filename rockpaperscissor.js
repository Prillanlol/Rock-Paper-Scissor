/// Definition of variables, starting values, and valid options
let options = ["rock", "paper", "scissor"]
playerScore = 0
computerScore = 0
const playerSelection = prompt("Rock, paper, scissor; Choose your weapon")
const computerSelection = computerPlay

/// Function so the computer selects a random option from the options array
function computerPlay() {
let selection = options[Math.floor(math.random()*options.length)];
    return selection;
}
/// Function to capitalise the first letter of options when displaying results


/// fucntion to play one round
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissor" || 
    computerSelection === "scissor" && playerSelection === "paper" ||
    computerSelection === "paper" && playerSelection === "rock") {
        return "Player wins with" + playerSelection + "while computer choose" 
        + computerSelection
    } else if 
    (playerSelection === "rock" && computerSelection === "scissor" || 
     playerSelection === "scissor" && computerSelection === "paper" ||
     playerSelection === "paper" && computerSelection === "rock") {
         return "Player wins with" + playerSelection + "while computer choose" 
         + computerSelection
     } else {
            return "It's a tie"
     }
}





/// Function to define the round results and message
/// Function to display the final result
/// Function to execute 5 rounds and display the final result: a complete best-of-5 game
 ///End check to see if playerSelection is valid
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoiceArray = ["rock", "paper", "scissors"];
    return computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)];
}


function getHumanChoice() {
    let prompted = prompt("Select 'paper', 'rock' or 'scissors': ");
    return prompted;
}


function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "rock" && computerChoice === "paper"
    ) {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        console.log("It's a tie! No one won");
    }
}


function playGame() {

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log("You Lose the Game!");
    } else if (computerScore < humanScore) {
        console.log("You won the Game!");
    } else {
        console.log("It is a Tie! No Winner, No Looser");
    }
}

playGame();
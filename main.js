const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const elements = document.querySelectorAll("button");
const humanResult = document.getElementById("human-result");
const computerResult = document.getElementById("computer-result");
const winnerMessage = document.getElementById("winner-msg");
const humanSelectionContainer = document.getElementById("human-selection");
const resetGameBtn = document.getElementById("reset-btn");
const gameWinnerMsg = document.getElementById("game-winner");
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoiceArray = ["rock", "paper", "scissors"];
    return computerChoiceArray[Math.floor(Math.random()*computerChoiceArray.length)];
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else if (
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "rock" && computerChoice === "paper"
    ) {
        computerScore++;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    } else {
        return "It's a tie! Both chose " + computerChoice;
    }
}


function playGame(humanChoice) {
    winnerMessage.innerText = playRound(humanChoice);
    humanResult.innerText = humanScore;
    computerResult.innerText = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        gameWinnerMsg.innerText = `${humanScore === 5 ? "Player" : "Computer"} has won the game!`;
    
        resetGameBtn.style.display = "block";
        humanSelectionContainer.style.display = "none";
    }
    
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    winnerMessage.innerText = ``;
    humanResult.innerText = 0;
    computerResult.innerText = 0;
    gameWinnerMsg.innerText = ``;
    humanSelectionContainer.style.display = "flex";
    resetGameBtn.style.display = "none";
}


rockBtn.addEventListener("click", function () {
    playGame("rock");
});
  
paperBtn.addEventListener("click", function () {
    playGame("paper");
});
  
scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
});

resetGameBtn.addEventListener("click", resetGame);

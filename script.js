function computerPlay() {
    let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    switch(random) {
        case 1:
            return "rock";
            break;
            case 2:
            return "paper";
            break;
            case 3:
            return "scissor";
            break;
    }
}


function gameRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Its a Draw.");
        }
        else if (computerSelection === "paper") {
            console.log("You Lose. Paper beats Rock");
            return computerScore++;
        }
        else if (computerSelection === "scissor") {
            console.log("You Win. Rock beats Scissor");
            return playerScore++;
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win. Paper beats Rock");
            return playerScore++;
        }
        else if (computerSelection === "paper") {
            console.log("Its a Draw.");
        }
        else if (computerSelection === "scissor") {
            console.log("You Lose. Scissor beats Paper");
            return computerScore++;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            console.log("You Lose. Rock beats Scissor");
            return computerScore++;
        }
        else if (computerSelection === "paper") {
            console.log("You Win. Scissor beats Paper");
            return playerScore++;
        }
        else if (computerSelection === "scissor") {
            console.log("Its a Draw.");
        }
    }
}

function playerSelection() {
    let playerPick = window.prompt("Please pick Rock, Paper or Scissor.", "rock");
    return playerPick.toLowerCase();
}

function game() {
    for (i = 1; i < 5; i++) {
        let playerChoice = playerSelection();
        let computerChoice = computerPlay();
        gameRound(playerChoice, computerChoice);
        console.log(`Player Score is ${playerScore}`);
        console.log(`Computer Score is ${computerScore}`);

    }
}
let playerScore = 0;
let computerScore = 0;
game();
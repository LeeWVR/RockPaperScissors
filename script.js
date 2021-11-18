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
            return "Its a Draw.";
        }
        else if (computerSelection === "paper") {
            return "You Lose. Paper beats Rock";
        }
        else if (computerSelection === "scissor") {
            return "You Win. Rock beats Scissor";
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win. Paper beats Rock";
        }
        else if (computerSelection === "paper") {
            return "Its a Draw.";
        }
        else if (computerSelection === "scissor") {
            return "You Lose. Scissor beats Paper";
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            return "You Lose. Rock beats Scissor";
        }
        else if (computerSelection === "paper") {
            return "You Win. Scissor beats Paper";
        }
        else if (computerSelection === "scissor") {
            return "Its a Draw.";
        }
    }
}

function playerSelection() {
    let playerPick = window.prompt("Please pick Rock, Paper or Scissor.", "rock");
    return playerPick.toLowerCase();

}

const playerPick = playerSelection();
const computerPick = computerPlay();
console.log(computerPick);
console.log(playerPick);
console.log(gameRound(playerPick, computerPick));
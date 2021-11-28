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
            result.innerHTML = "Its a Draw.";
        }
        else if (computerSelection === "paper") {
            result.innerHTML = "You Lose. Paper beats Rock";
            return computerScore++;
        }
        else if (computerSelection === "scissor") {
            result.innerHTML = "You Win. Rock beats Scissor";
            return playerScore++;
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result.innerHTML = "You Win. Paper beats Rock";
            return playerScore++;
        }
        else if (computerSelection === "paper") {
            result.innerHTML = "Its a Draw.";
        }
        else if (computerSelection === "scissor") {
            result.innerHTML = "You Lose. Scissor beats Paper";
            return computerScore++;
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            result.innerHTML = "You Lose. Rock beats Scissor";
            return computerScore++;
        }
        else if (computerSelection === "paper") {
            result.innerHTML = "You Win. Scissor beats Paper";
            return playerScore++;
        }
        else if (computerSelection === "scissor") {
            result.innerHTML = "Its a Draw.";
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const player = document.querySelector(".player");
const cpu = document.querySelector(".cpu");
const score = document.querySelector(".score");


const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => {
    game("rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    game("paper");
});

const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener("click", () => {
    game("scissor");
});

function game(choice) {
        let playerChoice = choice;
        let computerChoice = computerPlay();
        player.innerHTML = `You chose: ${playerChoice}`;
        cpu.innerHTML = `Computer chose: ${computerChoice}`;
        gameRound(playerChoice, computerChoice);
        score.innerHTML = `You: ${playerScore}  Computer: ${computerScore}`;
        console.log(`Player Score is ${playerScore}`);
        console.log(`Computer Score is ${computerScore}`);
        if (playerScore == 5) {
            score.innerHTML = "YOU WIN";
        }
        else if (computerScore == 5) {
            score.innerHTML = "YOU LOSE";
        }
}  


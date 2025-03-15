function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // 0, 1, or 2

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const getHumanChoice = () => prompt("Choose rock, paper, or scissors!");

// global variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result;

    switch (humanChoice.toLowerCase()) {
        case "rock":
            result =
                computerChoice === "scissors"
                    ? "win"
                    : computerChoice === "paper"
                    ? "lose"
                    : "tie";
            break;
        case "paper":
            result =
                computerChoice === "rock"
                    ? "win"
                    : computerChoice === "scissors"
                    ? "lose"
                    : "tie";
            break;
        case "scissors":
            result =
                computerChoice === "paper"
                    ? "win"
                    : computerChoice === "rock"
                    ? "lose"
                    : "tie";
            break;
        default:
            console.log("invalid input");
    }

    // increment score
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    // log result
    let formatChoice = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    let output =
        result === "tie"
            ? `Tie! Both threw ${formatChoice(humanChoice)}.`
            : `You ${result}! ${formatChoice(humanChoice)} ${
                  result === "win" ? "beats" : "loses to"
              } ${formatChoice(computerChoice)}.`;
    console.log(output);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(
        `WINNER: ${
            humanScore > computerScore
                ? "Human"
                : humanScore < computerScore
                ? "Computer"
                : "It's a tie"
        }!`
    );
}

playGame();

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

// getHumanChoice
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () =>
        playRound(button.id, getComputerChoice())
    );
});

// global variables
let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("div.results");
const scoresDiv = document.querySelector("div.scores");
const humanScoreDiv = document.querySelector("div#human-score");
humanScoreDiv.textContent = `Human: ${humanScore}`;
const computerScoreDiv = document.querySelector("div#computer-score");
computerScoreDiv.textContent = `Computer: ${computerScore}`;

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
    }

    // increment score
    if (result === "win") {
        humanScoreDiv.textContent = `Human: ${++humanScore}`;
    } else if (result === "lose") {
        computerScoreDiv.textContent = `Computer: ${++computerScore}`;
    }

    // log result
    let formatChoice = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    let output =
        result === "tie"
            ? `Tie! Both threw ${formatChoice(humanChoice)}.`
            : `You ${result}! ${formatChoice(humanChoice)} ${
                  result === "win" ? "beats" : "loses to"
              } ${formatChoice(computerChoice)}.`;

    let outputDiv = document.createElement("div");
    outputDiv.textContent = output;
    resultsDiv.appendChild(outputDiv);

    if (humanScore === 5 || computerScore === 5) {
        let finalResult = humanScore > computerScore ? "win" : "lose";

        let announceDiv = document.createElement("div");
        announceDiv.textContent = `GAME OVER! You ${finalResult} ${humanScore}:${computerScore}!`;
        announceDiv.style.fontWeight = "bold";
        announceDiv.style.color = "red";

        resultsDiv.appendChild(announceDiv);

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

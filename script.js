let capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return choice[random];
};

let getHumanChoice = () => {
    let choice;
    let arr = ["Rock", "Paper", "Scissors"];
    while (choice === undefined || choice === null || !arr.includes(choice)) {
        choice = prompt("Rock, Paper, or Scissors?");
        choice = capitalize(choice);
    }
    return choice;
}

let playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors"
        || humanChoice === "Paper" && computerChoice === "Rock"
        || humanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

let playGame = () => {
    let round = 0;
    while (round < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }
    if(humanScore > computerScore) {
        console.log(`You win! ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! ${humanScore} - ${computerScore}`);
    } else {
        console.log(`Tie! ${humanScore} - ${computerScore}`);
    }
}

//MAIN CODE
let humanScore = 0;
let computerScore = 0;
console.log(playGame());
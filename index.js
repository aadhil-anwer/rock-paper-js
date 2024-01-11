let choices = ["rock", "paper", "scissor"];
let userChoice;
let userScore=0;
let compScore=0;
let result;
function getUserChoice(choice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    userChoice = choice;
    document.getElementById("computer").innerHTML = "Computer Choice: " + computerChoice;
    document.getElementById("hooman").innerHTML = "Your Choice: " + userChoice;

    result = determineResult(userChoice, computerChoice);
    if (result == "You Win") {
        userScore++;
    } else if (result == "You Lose") {
        compScore++;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
    
    document.getElementById("user").innerHTML = "Your Point: " + userScore;
    document.getElementById("ComputerPoints").innerHTML = "Computer Pointt: " + compScore;
}

function determineResult(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return "Draw";
    } else {
        switch (userChoice) {
            case "rock":
                return computerChoice == "paper" ? "You Lose" : "You Win";
            case "paper":
                return computerChoice == "scissor" ? "You Lose" : "You Win";
            case "scissor":
                return computerChoice == "rock" ? "You Lose" : "You Win";
            default:
                return "Invalid choice";
        }
    }
}



const inputs = document.querySelectorAll("input");

function getPlayerChoice() {
    playRound(this.id, getComputerChoice());
    countScore();
}

inputs.forEach(input => input.addEventListener('click', getPlayerChoice));


function getComputerChoice() {
 /*
    const array = new Int8Array(1);
    self.crypto.getRandomValues(array);
*/
    return Math.floor(Math.random()*3);
}


function computerChoiceToString(computerString) {

    let computerChoice_string = "";
    switch (computerString) {
        case 0: return computerChoice_string = "rock";
            break;
        case 1: return computerChoice_string = "paper";
            break;
        case 2: return computerChoice_string = "scissors";
            break;
        case -2: return computerChoice_string = "scissors";
            break;
        default:
    }
}


function playRound(playerChoice, computerChoice) {

    computerChoice = getComputerChoice();

    if (playerChoice==0 && computerChoice==2) {
        computerChoice = -computerChoice;
    } else if (computerChoice==0 && playerChoice==2) {
        playerChoice = -playerChoice;
    }

    let tie = 0;
    let computer_wins = 0;
    let player_wins = 0;


        if (playerChoice == computerChoice) {
            tie++;
            document.getElementById("text").textContent = "Its a tie!"
        } else if (playerChoice > computerChoice) {
            player_wins++;
            document.getElementById("text").textContent = "Player wins! Computer choose: " + computerChoiceToString(computerChoice);
        } else {
            computer_wins++;
            document.getElementById("text").textContent = "Computer wins! It choose: " + computerChoiceToString(computerChoice);
        }
        return [tie, computer_wins, player_wins];
}

function countScore() {

    let scores = playRound();

    let current_tie = parseInt(document.getElementById("tie").textContent);
    let current_computer = parseInt(document.getElementById("computer_score").textContent);
    let current_player = parseInt(document.getElementById("player_score").textContent);


    if (isNaN(current_tie)) {
        current_tie = 0;
    }
    if (isNaN(current_computer)) {
        current_computer = 0;
    }
    if (isNaN(current_player)) {
        current_player = 0;
    }

    let new_tie = current_tie+scores[0];
    let new_computer = current_computer+scores[1];
    let new_player = current_player+scores[2];

    document.getElementById("tie").textContent = new_tie.toString();
    document.getElementById("computer_score").textContent = new_computer.toString();
    document.getElementById("player_score").textContent = new_player.toString();

}

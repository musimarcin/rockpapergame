
const inputs = document.querySelectorAll("input");

function getPlayerChoice() {
    playRound(this.id, getComputerChoice());
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


    if (playerChoice==0 && computerChoice==2) {
        computerChoice = -computerChoice;
    } else if (computerChoice==0 && playerChoice==2) {
        playerChoice = -playerChoice;
    }

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


        if (playerChoice == computerChoice) {
            current_tie++;
            document.getElementById("text").textContent = "Its a tie!"
        } else if (playerChoice > computerChoice) {
            current_player++;
            document.getElementById("text").textContent = "Player wins! Computer choose: " + computerChoiceToString(computerChoice);
        } else {
            current_computer++;
            document.getElementById("text").textContent = "Computer wins! It choose: " + computerChoiceToString(computerChoice);
        }


    let new_tie = current_tie;
    let new_computer = current_computer;
    let new_player = current_player;

    document.getElementById("tie").textContent = new_tie.toString();
    document.getElementById("computer_score").textContent = new_computer.toString();
    document.getElementById("player_score").textContent = new_player.toString();

}

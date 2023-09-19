

function getComputerChoice() {
 /*
    const array = new Int8Array(1);
    self.crypto.getRandomValues(array);
*/
    return Math.floor(Math.random()*3);
}


function getPlayerChoice() {
    //let player_choice = prompt("choose your weapon(rock/paper/scissors):").toLowerCase();
    let player_choice = document.getElementById("player_input").value.toString().toLowerCase();
//convert players choice to number to compare later
        if (player_choice == "rock" || player_choice == "paper" || player_choice == "scissors") {
            switch (player_choice) {
                case "rock": player_choice = 0;
                    break;
                case "paper": player_choice = 1;
                    break;
                case "scissors": player_choice = 2;
                    break;
                default:
            }
             return player_choice;
        } else {
            alert("wrong weapon try again");
        }
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


function playRound(computerChoice, playerChoice) {

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();


    if (playerChoice==0 && computerChoice==2) {
        computerChoice = -computerChoice;
    } else if (computerChoice==0 && playerChoice==2) {
        playerChoice = -playerChoice;
    }

    let tie = 0;
    let computer_wins = 0;
    let player_wins = 0;

    if (playerChoice==computerChoice) {
        tie++;
        document.getElementById("result").innerHTML = "Its a tie!"
    } else if(playerChoice>computerChoice) {
        player_wins++;
        document.getElementById("result").innerHTML = "Player wins! Computer choose: " + computerChoiceToString(computerChoice);
    } else {
        computer_wins++;
        document.getElementById("result").innerHTML = "Computer wins! It choose: " + computerChoiceToString(computerChoice);
    }
    return [tie, computer_wins, player_wins];
}

function countScore() {

    let scores = playRound();

    let current_tie = parseInt(document.getElementById("tie").innerHTML);
    let current_computer = parseInt(document.getElementById("computer_score").innerHTML);
    let current_player = parseInt(document.getElementById("player_score").innerHTML);


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

    document.getElementById("tie").innerHTML = new_tie.toString();
    document.getElementById("computer_score").innerHTML = new_computer.toString();
    document.getElementById("player_score").innerHTML = new_player.toString();

}

const btn = document.getElementById("play_button");
btn.addEventListener("click", getPlayerChoice);
btn.addEventListener("click", playRound);
btn.addEventListener("click", countScore);
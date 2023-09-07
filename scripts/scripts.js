function getComputerChoice() {
 /*
    const array = new Int8Array(1);
    self.crypto.getRandomValues(array);
*/
    return Math.floor(Math.random()*3);
}


function getPlayerChoice() {
    let x=0;
    do {
        let player_choice = prompt("choose your weapon(rock/paper/scissors):").toLowerCase();
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
                x=1;
             return player_choice;
        } else {
            alert("wrong weapon try again");
        }
    } while (x==0);
}

function reverseValue(reverseComputer, reversePlayer) {


    console.log(reverseComputer);
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


    if (playerChoice==computerChoice) {
        document.getElementById("result").innerHTML = "Its a tie!"
    } else if(playerChoice>computerChoice) {
        document.getElementById("result").innerHTML = "Player wins! Computer choose: " + computerChoiceToString(computerChoice);
    } else {
        document.getElementById("result").innerHTML = "Computer wins! It choose: " + computerChoiceToString(computerChoice);
    }

}
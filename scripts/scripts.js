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
            x=1;
            return player_choice;
        } else {
            alert("wrong weapon try again");
            console.log(x);
        }
    } while (x==0);
}

function reverseValue(computerChoice, playerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    if (playerChoice==0 && computerChoice==2) {
        return computerChoice = -computerChoice;
    } else if (computerChoice==0 && playerChoice==2) {
        return playerChoice = -playerChoice;
    }
}

function computerChoicetoString(computerChoice) {
    computerChoice = getComputerChoice();

    let computerChoice_string = "";
    switch (computerChoice) {
        case 0: return computerChoice_string = "rock";
            break;
        case 1: return computerChoice_string = "paper";
            break;
        case 2: return computerChoice_string = "scissors";
            break;
        default:
    }
}

function playRound(computerChoice, playerChoice) {

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    switch (playerChoice) {
        case "rock": playerChoice = 0;
        break;
        case "paper": playerChoice = 1;
        break;
        case "scissors": playerChoice = 2;
        break;
        default:
            console.log("this is default")
    }

computerChoicetoString(computerChoice);
reverseValue(computerChoice, playerChoice);

}
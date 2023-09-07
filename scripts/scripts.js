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
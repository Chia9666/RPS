let playGame = confirm('Want to play Rock, Paper, Scissor?');

//Initialize Gmae
if (playGame) {
    //Give player choice
    let playerChoice = prompt('Pick rock, paper or scissor');

    //Valid choice?
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase;
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissor') {
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1 ? 'rock'
            : computerChoice === 2 ? 'paper'
            : computerChoice === 3 ? 'scissor'
        }
    } else {
        alert('Oh... it\'s alright D:');
    }
} else {
    alert('Alright, maybe next time.');
}
let playGame = confirm("Want to play Rock, Paper, Scissor?");

//Initialize Gmae
if (playGame) {
  //Give player choice
  let playerChoice = prompt("Pick rock, paper or scissor");

  //Valid choice?
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissor"
    ) {
      //Generate computer choice
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      //Compare Results
      let result =
        playerOne === computer
          ? "Tie Game!"
          : playerOne === "rock" && computer !== "scissor"
          ? "You lost!"
          : playerOne === "paper" && computer !== "rock"
          ? "You lost!"
          : playerOne === "scissor" && computer !== "paper"
          ? "You lost!"
          : "You won!";
      alert(result);

      confirm("Want to play again?") ? location.reload() : "See you next time!";
    } else {
      alert("Not a valid choice.");
      location.reload();
    }
  } else {
    alert("Oh... it's alright D:");
  }
} else {
  alert("Alright, maybe next time.");
}

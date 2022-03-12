let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("fire");
const water_div = document.getElementById("water");
const grass_div = document.getElementById("grass");

function getComputerChoice() {
  let choices = new Map();
  choices.set(0, "f").set(1, "w").set(2, "g");
  /* const choices = ["f", "w", "g"];*/
  let randomNumber = Math.floor(Math.random() * 3);
  return choices.get(randomNumber);
}

function win(userChoice, computerChoice) {
  userScore++;
  const fullName = new Map();
  fullName.set("f", "Fire").set("w", "Water").set("g", "Grass");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${fullName.get(
    userChoice
  )}(User) superEffective against ${fullName.get(
    computerChoice
  )}(Computer).<br> You Win!`;

  document
    .getElementById(fullName.get(userChoice).toLowerCase())
    .classList.add("green-glow");
  setTimeout(function () {
    document
      .getElementById(fullName.get(userChoice).toLowerCase())
      .classList.remove("green-glow");
  }, 350);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  const fullName = new Map();
  fullName.set("f", "Fire").set("w", "Water").set("g", "Grass");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${fullName.get(
    computerChoice
  )}(Computer) superEffective against ${fullName.get(
    userChoice
  )}(User).<br> You Lose!`;
  document
    .getElementById(fullName.get(userChoice).toLowerCase())
    .classList.add("red-glow");
  setTimeout(function () {
    document
      .getElementById(fullName.get(userChoice).toLowerCase())
      .classList.remove("red-glow");
  }, 350);
}

function draw(userChoice, computerChoice) {
  const fullName = new Map();
  fullName.set("f", "Fire").set("w", "Water").set("g", "Grass");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Both are the same type.<br> It's a draw!`;
  document
    .getElementById(fullName.get(userChoice).toLowerCase())
    .classList.add("grey-glow");
  setTimeout(function () {
    document
      .getElementById(fullName.get(userChoice).toLowerCase())
      .classList.remove("grey-glow");
  }, 350);
}

function game(userChoice) {
  let computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "fg":
    case "wf":
    case "gw":
      win(userChoice, computerChoice);
      break;
    case "fw":
    case "wg":
    case "gf":
      lose(userChoice, computerChoice);
      break;
    case "ff":
    case "ww":
    case "gg":
      draw(userChoice, computerChoice);
  }
}

function main() {
  fire_div.addEventListener("click", function () {
    game("f");
  });
  water_div.addEventListener("click", function () {
    game("w");
  });
  grass_div.addEventListener("click", function () {
    game("g");
  });
}

main();
/* choices_div.forEach((choice) => choice.addEventListener("click", main));
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
*/

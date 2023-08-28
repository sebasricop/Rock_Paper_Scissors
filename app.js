const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("star-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
  play(ROCK);
});

paperBtn.addEventListener("click", () => {
  play(PAPER);
});

scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  userImg.src = "/img/" + userOption + ".svg";

  resultText.innerHTML = "Choosing!";

  const interval = setInterval(function () {
    const machineOption = calcMachineOption();
    machineImg.src = "/img/" + machineOption + ".svg";
  }, 200);

  setTimeout(function () {
    clearInterval(interval);

    machineImg.src = "/img/" + machineOption + ".svg";

    switch (result) {
      case TIE:
        resultText.innerHTML = "You have tied!";
        break;
      case WIN:
        resultText.innerHTML = "You win!";
        break;
      case LOST:
        resultText.innerHTML = "You lost!";
        break;
    }
  }, 2000);

  const machineOption = calcMachineOption();
  const result = calcResult(userOption, machineOption);
}

function calcMachineOption() {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return ROCK;
      break;
    case 1:
      return PAPER;
      break;
    case 2:
      return SCISSORS;
      break;
  }
}

function calcResult(userOption, machineOption) {
  if (userOption === machineOption) {
    return TIE;
  } else if (userOption === ROCK) {
    if (machineOption === PAPER) return LOST;
    if (machineOption === SCISSORS) return WIN;
  } else if (userOption === PAPER && machineOption === SCISSORS) {
    if (machineOption === SCISSORS) return LOST;
    if (machineOption === ROCK) return WIN;
  } else if (userOption === SCISSORS && machineOption === SCISSORS) {
    if (machineOption === ROCK) return LOST;
    if (machineOption === PAPER) return WIN;
  }
}

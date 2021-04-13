const dots = document.querySelectorAll(".dots");

const playerMain = document.getElementById("player-main");
const playerInfo = document.getElementById("player-info");
const playerScore = document.querySelector("#player .score span");

const computerMain = document.getElementById("computer-main");
const computerInfo = document.getElementById("computer-info");
const computerScore = document.querySelector("#computer .score span");

var pScore = 0; // playerscore
var cScore = 0; // computerscore

const SELECTIONS = [
  {
    name: "ROCK",
    emoji: "🗿",
    beats: "SCISSORS",
    selected: false,
  },
  {
    name: "PAPER",
    emoji: "📜",
    beats: "ROCK",
    selected: false,
  },
  {
    name: "SCISSORS",
    emoji: "✂️",
    beats: "PAPER",
    selected: false,
  },
];

const handleSelect = (selectedItem, item) => {
  SELECTIONS.forEach((selection) => {
    if (selectedItem === selection.name) {
      playerMain.innerText = selection.emoji;
      playerInfo.innerText = selection.name;
      selection.selected = true;
      dots.forEach((d) => {
        if (selection.name === d.classList[1].toUpperCase()) {
          if (selection.selected) {
            d.classList.add("selected");
          }
        } else {
          d.classList.remove("selected");
        }
      });
    }
  });
  let computerChoice = computer();
  compare(selectedItem, computerChoice);
};

const computer = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  computerInfo.innerText = SELECTIONS[randomNumber].name;
  computerMain.innerText = SELECTIONS[randomNumber].emoji;
  return SELECTIONS[randomNumber];
};

const compare = (selectedItem, computerChoice) => {
  if (computerChoice.name === selectedItem) {
    console.log("TIE");
  } else if (computerChoice.beats === selectedItem) {
    cScore++;
    computerScore.innerText = cScore;
    console.log("COMPUTER WIN", cScore);
  } else {
    pScore++;
    playerScore.innerText = pScore;
    console.log("PLAYER WIN");
  }
};

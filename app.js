const dots = document.querySelectorAll(".dots");
const playerMain = document.getElementById("player-main");
const playerInfo = document.getElementById("player-info");

const computerMain = document.getElementById("computer-main");
const computerInfo = document.getElementById("computer-info");

const SELECTIONS = [
  {
    name: "ROCK",
    emoji: "🗿",
    beats: "SCISSORS",
  },
  {
    name: "PAPER",
    emoji: "📜",
    beats: "ROCK",
  },
  {
    name: "SCISSORS",
    emoji: "✂️",
    beats: "PAPER",
  },
];

dots.forEach((d) => {
  d.onclick = () => {
    playerMain.innerText = d.innerText;
    playerInfo.innerText = d.classList[1];
    const selectionName = playerInfo.innerText;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    let computer = computerChoice();
    compareChoices(selection, computer);
  };
});

const computerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  computerMain.innerText = SELECTIONS[randomNumber].emoji;
  computerInfo.innerText = SELECTIONS[randomNumber].name;
  return SELECTIONS[randomNumber];
};

const compareChoices = (player, computer) => {
  if (player === computer) {
    console.log("TIE");
  } else {
    if (player.beats === computer.name) {
      console.log("PLAYER WIN");
    } else {
      console.log("COMPUTER WIN");
    }
  }
};

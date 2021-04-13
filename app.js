const dots = document.querySelectorAll(".dots");
const playerMain = document.getElementById("player-main");
const playerInfo = document.getElementById("player-info");

const computerMain = document.getElementById("computer-main");
const computerInfo = document.getElementById("computer-info");

dots.forEach((d) => {
  d.onclick = () => {
    playerMain.innerText = d.innerText;
    playerInfo.innerText = d.classList[1];
    computerChoice();
  };
});

const computerChoice = () => {
  const optionTexts = ["rock", "paper", "scissors"];
  const optionEmojis = ["🗿", "📜", "✂️"];
  let randomNumber = Math.floor(Math.random() * 3);
  computerMain.innerText = optionEmojis[randomNumber];
  computerInfo.innerText = optionTexts[randomNumber];
};

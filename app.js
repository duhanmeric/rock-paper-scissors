const dots = document.querySelectorAll(".dots");
const mainResult = document.querySelector(".main-result");
const infoResult = document.querySelector(".info-result");

dots.forEach((d) => {
  d.onclick = () => {
    let user = new User(d.classList[1]); // 1
    mainResult.innerText = d.innerText;
    infoResult.innerText = d.classList[1];
  };
});

// 1
class User {
  constructor(selected) {
    this.selected = selected;
  }

  showSelected() {
    console.log(this.selected);
  }
}

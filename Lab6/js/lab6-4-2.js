const output = document.querySelector(".output");
const message = document.querySelector(".message");
const startBtn = document.querySelector("#startBtn");

const box = document.createElement("img");
box.src = "./assets/img/jerry.webp";
box.classList.add("box");
output.appendChild(box);

const game = {
  timer: 0,
  start: null,
};

function ranRum(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  message.textContent = "Click nhanh nào!";
  game.start = new Date().getTime();

  box.style.left = ranRum(450) + "px";
  box.style.top = ranRum(450) + "px";
  box.style.display = "block";
}

box.addEventListener("click", () => {
  box.style.display = "none";

  const cur = new Date().getTime();
  const dur = ((cur - game.start) / 1000).toFixed(2);
  message.textContent = `Bạn phản xạ mất: ${dur} giây`;

  game.timer = setTimeout(addBox, ranRum(2000) + 1000);
});

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  message.textContent = "Đợi tí hình hiện...";
  setTimeout(addBox, ranRum(2000) + 1000);
});

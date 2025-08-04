const output = document.querySelector(".output");
const message = document.querySelector(".message");
const startBtn = document.getElementById("startBtn");

const box = document.createElement("div");
box.classList.add("box");
output.appendChild(box);

const game = {
  timer: null,
  start: null,
};

function ranNum(max) {
  return Math.floor(Math.random() * max);
}

function addBox() {
  message.textContent = "Click nhanh lên!";
  game.start = new Date().getTime();

  box.style.left = ranNum(450) + "px";
  box.style.top = ranNum(450) + "px";
  box.style.display = "block";
}

box.addEventListener("click", () => {
  if (!game.start) return; // chưa bắt đầu mà click thì bỏ qua

  box.style.display = "none";
  const currentTime = new Date().getTime();
  const duration = ((currentTime - game.start) / 1000).toFixed(2);
  message.textContent = `Bạn mất ${duration} giây để phản xạ.`;

  game.start = null;
  game.timer = setTimeout(addBox, ranNum(3000) + 1000);
});

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  message.textContent = "Đợi chút, chuẩn bị...";
  setTimeout(addBox, ranNum(2000) + 1000);
});

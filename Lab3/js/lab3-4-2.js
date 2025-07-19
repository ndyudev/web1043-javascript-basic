var arr = [
  "./assets/images/bua.jpg",
  "./assets/images/bao.png",
  "./assets/images/keo.png",
];
var nameArr = ["Rock", "Paper", "Scissors"];

function getValue(c) {
  var s = Math.floor(Math.random() * 3); // Máy chọn

  let playerChoice = arr[c];
  let computerChoice = arr[s];
  let result = "";

  if (c === s) {
    result = `Cả hai chọn ${nameArr[c]} – Kết quả: Hòa!`;
  } else {
    switch (c) {
      case 0: // Rock
        result =
          s === 2
            ? "Bạn thắng! Rock thắng Scissors"
            : "Bạn thua! Paper thắng Rock";
        break;
      case 1: // Paper
        result =
          s === 0
            ? "Bạn thắng! Paper thắng Rock"
            : "Bạn thua! Scissors thắng Paper";
        break;
      case 2: // Scissors
        result =
          s === 1
            ? "Bạn thắng! Scissors thắng Paper"
            : "Bạn thua! Rock thắng Scissors";
        break;
    }
  }

  document.getElementById(
    "nguoi"
  ).innerHTML = `<img src="${playerChoice}" width="200">`;
  document.getElementById(
    "may"
  ).innerHTML = `<img src="${computerChoice}" width="200">`;
  document.getElementById("result").innerHTML = result;
}

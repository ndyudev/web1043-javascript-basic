let flag = true; // để chọn nhãn ( true = x , false = o)
let count = 0;

function mark(index) {
  const buttons = document.querySelectorAll("button");
  const btn = buttons[index];

  btn.innerText = flag ? "X" : "O";
  btn.style.backgroundColor = flag ? "aqua" : "yellow";
  btn.disabled = true;

  flag = !flag;
  count++;
  
  if (count === 9) {
    setTimeout(() => {
      alert("Trò chơi kết thúc!");
      location.reload();
    }, 100);
  }
}

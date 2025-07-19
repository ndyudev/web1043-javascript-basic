let a = parseFloat(prompt("Nhập giá trị của a:"));
let b = parseFloat(prompt("Nhập giá trị của b:"));
let o = prompt("Nhập phép toán bạn muốn (+, -, *, /):");
let kq = 0;

switch (o) {
  case "+":
    kq = a + b;
    break;
  case "-":
    kq = a - b;
    break;
  case "*":
    kq = a * b;
    break;
  case "/":
    if (b === 0) {
      alert("Không thể chia cho 0");
      break;
    }
    kq = a / b;
    break;
  default:
    alert("Phép toán không hợp lệ");
    break;
}

document.getElementById("result").innerHTML = "Kết quả: " + kq;

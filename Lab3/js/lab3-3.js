// Khai báo toán hạng và toán tử
let a = "";
let b = "";
let o = null;

// Hiển thị lên màn hình
function cap_nhat_display(value) {
  document.getElementById("display").innerText = value;
}

// Làm lại từ đầu
function lam_lai() {
  a = "";
  b = "";
  o = null;
  cap_nhat_display("0");
}

// Ghi nhận số được nhấn
function toan_hang(x) {
  if (o === null) {
    a += x;
    cap_nhat_display(a);
  } else {
    b += x;
    cap_nhat_display(a + " " + o + " " + b);
  }
}

// Ghi nhận toán tử
function toan_tu(x) {
  if (a === "") {
    alert("Bạn cần nhập số trước!");
    return;
  }
  o = x;
  cap_nhat_display(a + " " + o);
}

// Thực hiện phép tính
function thuc_hien() {
  if (a === "" || o === null || b === "") {
    alert("Vui lòng nhập đầy đủ phép tính.");
    return;
  }

  const so1 = parseFloat(a);
  const so2 = parseFloat(b);
  let ketqua;

  switch (o) {
    case "+":
      ketqua = so1 + so2;
      break;
    case "-":
      ketqua = so1 - so2;
      break;
    case "x":
    case "*":
      ketqua = so1 * so2;
      break;
    case ":":
    case "/":
      if (so2 === 0) {
        alert("Không thể chia cho 0.");
        lam_lai();
        return;
      }
      ketqua = so1 / so2;
      break;
    default:
      alert("Toán tử không hợp lệ.");
      lam_lai();
      return;
  }

  cap_nhat_display(`${a} ${o} ${b} = ${ketqua}`);

  setTimeout(() => {
    lam_lai();
  }, 5000);
}

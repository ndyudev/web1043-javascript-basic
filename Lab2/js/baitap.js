/* Nhập vào bán kính tính chu vi và diện tích hình tròn */
let r = parseInt(prompt("Nhập vào bán kính hình tròn"));

if (r < 0) {
  alert("Bán kính phải lớn hơn 0");
} else {
  const chuVi = 2 * Math.PI * r;
  const dienTich = Math.PI * r * r;
  document.getElementById("chuvi").innerHTML = chuVi.toFixed(2);
  document.getElementById("dientich").innerHTML = dienTich.toFixed(2);
}

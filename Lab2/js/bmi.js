/* 

Bài 3 (2 điểm): Tính chỉ số BMI (kg/m2) - 
BMI = (Trọng lượng cơ thể)/(Chiều cao x Chiều cao) - - - - 
Dưới 18.5 là thiếu cân 
18.5 đến 24.99 là bình thường 
25 đến 29.99 là thừa câ */

alert("Tính chỉ số BMI (kg/m²)");

let kg = parseFloat(prompt("Nhập trọng lượng cơ thể (kg):"));
let height = parseFloat(prompt("Nhập chiều cao của bạn (cm):")) / 100;

let bmi = kg / (height * height);

if (bmi < 18.5) {
  alert("Thiếu cân");
} else if (bmi <= 24.99) {
  alert("Bình thường");
} else if (bmi <= 29.99) {
  alert("Thừa cân");
} else {
  alert("Béo phì");
}
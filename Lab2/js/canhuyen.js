/* Câu 1
Dùng prompt() nhập từ bàn phím 2 giá trị a,b 
Áp dụng định lý Pythagorean a2+b2=c2
*/

alert("Tam giác bằng định lý Pythagorean.");

let a = parseInt(prompt("Nhập giá trị của a"));
let b = parseInt(prompt("Nhập giá trị của b"));  

let c = Math.sqrt(a * a + b * b); // sprt căn bình phương

document.getElementById("result").innerHTML = c;

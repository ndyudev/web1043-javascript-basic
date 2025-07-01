/* Câu 1
Dùng prompt() nhập từ bàn phím 2 giá trị a,b 
Áp dụng định lý Pythagorean a2+b2=c2
*/

// alert("Tam giác bằng định lý Pythagorean.")

// let a = prompt("Nhập giá trị của a");
// let b = prompt("Nhập giá trị của b")

// let c = Math.sqrt(a*a + b*b); // sprt căn bình phương

// document.getElementById("result").innerHTML = c

/* 
Bài 2 (2 điểm): Đổi đơn vị đất đai 
Tạo biến chứa giá trị mà mét vuông, chuyển đổi giá trị đó sang đơn vị sào, ha 
(hecta), mẫu 
Ví dụ: 3600m2 đất là 10 sào = 1 mẫu (Nam Bộ) = 1ha
*/

// let dat = prompt("Nhap dien tich m:");

// let sao = dat /360;
// let ha = sao / 10;

// document.getElementById("sao").innerHTML = sao
// document.getElementById("ha").innerHTML = ha

/* 

Bài 3 (2 điểm): Tính chỉ số BMI (kg/m2) - 
BMI = (Trọng lượng cơ thể)/(Chiều cao x Chiều cao) - - - - 
Dưới 18.5 là thiếu cân 
18.5 đến 24.99 là bình thường 
25 đến 29.99 là thừa câ */

// alert("Tính chỉ số BMI (kg/m²)");

// let kg = parseFloat(prompt("Nhập trọng lượng cơ thể (kg):"));
// let height = parseFloat(prompt("Nhập chiều cao của bạn (m):")) / 100;

// let bmi = kg / (height * height);

// if (bmi < 18.5) {
//     alert("Thiếu cân");
// } else if (bmi <= 24.99) {
//     alert("Bình thường");
// } else if (bmi <= 29.99) {
//     alert("Thừa cân");
// } else {
//     alert("Béo phì");
// }

/* 
Bài 4 (2 điểm): 

Cho mảng sau const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']]; - - - - - - 
Xoá phần tử đầu tiên và phần tử cuối cùng của mảng 
Thêm 'FIRST' vào đầu mảng 
Thêm 'hello world' vào vị trí thứ 4 của mảng 
Thêm 'middle' vào vị trí thứ 3 của mảng 
Thêm 'LAST' vào cuối mảng 
Xuất kết quả 
*/

const theList = ['Lauren', 'Kevin', true, 35, null, undefined , ['one', 'two']];


theList.unshift('FIRST');
theList.pop('FIRST')
theList.splice(4, 0 , 'hello world', 4);
theList.splice(3, 0 , 'middle');
console.log(typeof(theList[6]));
theList.push('LAST');

console.log(theList);

/*

Bài 5 (2 điểm): 
Tạo trang web game.html và viết mã javascript thực hiện trò chơi đoán số bí mật 
theo mô tả và hướng dẫn sau.  - 
Máy tính sinh nguyên số ngẫu nhiên (số bí mật) từ 10 đến 15 và lưu vào 
biến x  
var x = 10 + Math.round(5 * Math.random());
Người dùng nhập từ bàn phím một số và lưu vào biến a  
var a = prompt(“Số nhập vào”);  
Máy tính sẽ kiểm tra và đưa ra thông báo  
o Nếu a = x: "Chúc mừng, bạn đã đoán đúng" 
o Nếu a > x: "Giá trị của bạn lớn hơn số bí mật" 
o Nếu a < x: "Giá trị của bạn nhỏ hơn số bí mật" 
if(a == x){  
//alert 
}  
else if (a > x){ 
//alert 
}  
else{  
//alert 
}
*/
var x = 10 + Math.round(5 * Math.random());
var a = prompt("Số nhập vào");

if(a == x){
    alert("Chúc mừng, bạn đã đoán đúng");
} else if (a > x){
    alert("Giá trị của bạn lớn hơn số bí mật");
} else {
    alert("Giá trị của bạn nhỏ hơn số bí mật");
}



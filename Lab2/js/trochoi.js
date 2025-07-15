
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
var y = prompt("Số nhập vào");

if(y == x){
    alert("Chúc mừng, bạn đã đoán đúng");
} else if (y > x){
    alert("Giá trị của bạn lớn hơn số bí mật");
} else {
    alert("Giá trị của bạn nhỏ hơn số bí mật");
}



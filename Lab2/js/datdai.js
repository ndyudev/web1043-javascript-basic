/* 
Bài 2 (2 điểm): Đổi đơn vị đất đai 
Tạo biến chứa giá trị mà mét vuông, chuyển đổi giá trị đó sang đơn vị sào, ha 
(hecta), mẫu 
Ví dụ: 3600m2 đất là 10 sào = 1 mẫu (Nam Bộ) = 1ha
*/

let dat = prompt("Nhap dien tich m:");

let sao = dat / 360;
let ha = sao / 10;

document.getElementById("sao").innerHTML = sao;
document.getElementById("ha").innerHTML = ha;

// Tạo đối tượng sinh viên
var sv = new Object();

// Nhập dữ liệu từ người dùng
sv.hoTen = prompt("Nhập họ và tên sinh viên:");
sv.diem = parseFloat(prompt("Nhập điểm trung bình:"));

// Khai báo phương thức hiển thị
sv.hienThi = function () {
    if (isNaN(this.diem)) {
        alert("Điểm kh hợp lệ");
        return;
    }

    // Xếp loại học lực
    if (this.diem >= 5) {
        this.hocLuc = "Đậu";
    } else {
        this.hocLuc = "Rớt";
    }
    document.querySelector(".name").innerText = "Họ và tên: " + this.hoTen;
    document.querySelector(".point").innerText = "Điểm TB: " + this.diem;
    document.querySelector(".grade").innerText = "Học lực: " + this.hocLuc;
};

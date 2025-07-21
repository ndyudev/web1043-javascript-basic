let newWindow = null;

// Mở cửa sổ mới
document.getElementById("btnOpen").onclick = function () {
    const width = 1500;
    const height = 1500;

    newWindow = window.open(
        "",
        "Cửa sổ mới",
        `toolbar=yes,menubar=yes,width=${width},height=${height}`
    );

    if (newWindow) {
        newWindow.document.write("<h2>Cửa sổ mới đã mở thành công!</h2>");
    } else {
        alert("Trình duyệt chặn pop-up, vui lòng bật lại!");
    }
};

// Đóng cửa sổ
document.getElementById("btnClose").onclick = function () {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
    } else {
        alert("Không có cửa sổ nào để đóng.");
    }
};

// Kiểm tra cửa sổ
document.getElementById("btnCheck").onclick = function () {
    if (!newWindow) {
        alert("Cửa sổ chưa được mở.");
    } else if (newWindow.closed) {
        alert("Cửa sổ đã bị đóng.");
    } else {
        alert("Cửa sổ vẫn đang mở.");
    }
};

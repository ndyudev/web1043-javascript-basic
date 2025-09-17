// Ternary Operator - Toán tử 3 ngôi

let course = {
  name: "JS Basic",
  status: "active",
};

// if(course.status === "active") {
//     console.log("Hoàn thành khóa học");
// } else {
//     console.log("Chưa hoàn thành khóa học");
// }

console.log(course.status === "active" ? true : false);

// Hàm kiểm tra đủ tuổi bỏ phiếu
function getCanVoteMessage(age) {
  return age > 18 ? "Bạn có thể bỏ phiếu" : "Bạn có thể bỏ phiếu";
}

console.log(getCanVoteMessage(17));

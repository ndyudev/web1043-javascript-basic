// Video 102: Break - Continue on Loop
console.log("Video 102: Break - Continue on Loop");
// Exp 1: Tìm được số chia hết cho 5 thì dừng
let numbers = [1, 3, 7, 9, 15, 20];
for (let num of numbers) {
  if (num % 5 === 0) {
    console.log("Found number divisible by 5:", num);
    break; // → Dừng luôn, không chạy tiếp vòng for
  }
}

// Exp 2:
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua ở dưới tiếp tục loop tiếp theo
  }
  console.log(i);
}
// Exp 3: Kiểm tra user in ra và bỏ qua bot nếu tìm thấy duy thì off vòng for
let users = ["admin", "guest", "bot", "duy", "test"];
for (let user of users) {
  if (user === "bot") continue;
  if (user === "duy") {
    console.log("Found Duy 👑");
    break;
  }
  console.log("Checking user:", user);
}


/*🔥 Tóm gọn nhớ lâu:
Keyword	        Ý nghĩa	                        Khi nào dùng
break	        Dừng vòng lặp	                Khi đã đạt điều kiện cần thiết
continue	    Bỏ qua lần lặp hiện tại	        Khi muốn skip giá trị không cần xử lý */
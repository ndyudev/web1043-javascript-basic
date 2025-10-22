// 🧩 Video 105: Recursion - Đệ quy
console.log("Video 105: Recursion - Đệ quy");

// 🧹 1. Xóa các phần tử trùng nhau trong mảng bằng Set
var array = ["a", "b", "c", "a", "b", "d", "e"];
console.log([...new Set(array)]); // 👉 ['a', 'b', 'c', 'd', 'e']

// 🧩 2. Vòng lặp đệ quy thay cho for/while
let myArray = ["JS", "Python", "Java"];

function loop(start, end, cb) {
  if (start < end) {
    cb(start); // Gọi callback (ví dụ: in ra phần tử)
    return loop(start + 1, end, cb); // Gọi lại chính hàm loop()
  }
}

// Gọi hàm
loop(0, myArray.length, function (index) {
  console.log(myArray[index]);
});

// 🧮 3. Tính giai thừa bằng vòng lặp thông thường
function giaiThua(num) {
  let output = 1;
  for (let i = num; i > 0; i--) {
    output = output * i;
  }
  return output;
}

let output = giaiThua(6);
console.log(output); // 👉 720

// 🧮 4. Tính giai thừa bằng đệ quy
function GiaiThua(number) {
  if (number > 0) {
    return number * GiaiThua(number - 1);
  }
  return 1; // Điểm dừng (base case)
}

console.log(GiaiThua(3)); // 👉 6

// 🧨 5. Đếm ngược bằng đệ quy
function countDown(number) {
  if (number > 0) {
    console.log(number);
    return countDown(number - 1);
  }
  return number; // Dừng khi number = 0
}

countDown(5);

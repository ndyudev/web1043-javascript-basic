// 🧩 Video 106: Array Method
console.log("Video 106: Array Method");

/**
 * 🧠 Tổng hợp các phương thức làm việc với mảng trong JS:
 * -----------------------------------------------------
 * 1️⃣ forEach()   — Duyệt qua từng phần tử (không return)
 * 2️⃣ every()     — Kiểm tra TẤT CẢ phần tử có thỏa điều kiện không
 * 3️⃣ some()      — Kiểm tra CHỈ CẦN 1 phần tử thỏa điều kiện
 * 4️⃣ find()      — Tìm phần tử ĐẦU TIÊN thỏa điều kiện
 * 5️⃣ filter()    — Lọc ra tất cả phần tử thỏa điều kiện
 * 6️⃣ map()       — Tạo mảng mới từ mảng gốc (biến đổi từng phần tử)
 * 7️⃣ reduce()    — Tích lũy giá trị của mảng thành 1 kết quả duy nhất
 * 8️⃣ includes()  — Kiểm tra xem có phần tử/chuỗi cụ thể không
 */

let courses = [
  { id: 1, name: "javascript", coin: 250 },
  { id: 2, name: "Front End Develop", coin: 0 },
  { id: 3, name: "Java Spring Boot", coin: 210 },
  { id: 4, name: "Full Stack MERN JS", coin: 340 },
  { id: 5, name: "Front End Develop", coin: 15 },
];

/* -----------------------------------
 * 🔹 1. forEach() — Duyệt qua từng phần tử
 * -----------------------------------
 * ➜ Không return được (luôn trả về undefined)
 * ➜ Dùng để lặp qua mảng và thao tác với từng phần tử
 */
courses.forEach(function (course, index) {
  console.log(index, course);
});

/* -----------------------------------
 * 🔹 2. every() — Kiểm tra TẤT CẢ phần tử
 * -----------------------------------
 * ➜ Trả về true nếu MỌI phần tử đều thỏa điều kiện
 * ➜ Trả về false nếu CHỈ 1 phần tử sai điều kiện
 */
let isFreeEvery = courses.every(function (course) {
  return course.coin === 0; // Kiểm tra toàn bộ khoá học có miễn phí không
});
console.log("Tất cả đều free? 👉", isFreeEvery);

/* -----------------------------------
 * 🔹 3. some() — Kiểm tra CHỈ CẦN 1 phần tử
 * -----------------------------------
 * ➜ Trả về true nếu ÍT NHẤT 1 phần tử thỏa điều kiện
 */
let isFreeSome = courses.some(function (course) {
  return course.coin === 0; // Chỉ cần có 1 khoá học miễn phí là true
});
console.log("Có khóa học nào free không? 👉", isFreeSome);

/* -----------------------------------
 * 🔹 4. find() — Tìm phần tử ĐẦU TIÊN
 * -----------------------------------
 * ➜ Trả về phần tử đầu tiên thỏa điều kiện
 * ➜ Không tìm thấy → undefined
 */
let isLookForFind = courses.find(function (course) {
  return course.name === "Front End Develop"; // Tìm khoá đầu tiên có tên này
});
console.log("Tìm bằng find() 👉", isLookForFind);

/* -----------------------------------
 * 🔹 5. filter() — Lọc danh sách
 * -----------------------------------
 * ➜ Giống find() nhưng trả về TẤT CẢ phần tử thỏa điều kiện (mảng mới)
 */
let listCourse = courses.filter(function (course) {
  return course.name === "Front End Develop"; // Lọc toàn bộ các khoá có tên này
});
console.log("Danh sách khóa Front End Develop 👉", listCourse);

/* -----------------------------------
 * 🔹 6. map() — Biến đổi từng phần tử → mảng mới
 * -----------------------------------
 * ➜ Dùng khi muốn tạo mảng mới từ mảng cũ
 */
function HandlerCourse(course, index, origin) {
  return {
    id: course.id,
    name: `Khóa học ${course.name}`, // Thêm chữ "Khóa học" vào tên
    coin: course.coin,
    coinText: `Giá: ${course.coin}`, // Thêm text giá
    index: index, // Lưu index hiện tại
    originArray: course, // Lưu lại phần tử gốc
  };
}
let newCourses = courses.map(HandlerCourse);
console.log(newCourses);

// 🔹 map() - Lấy danh sách chỉ có tên khóa học
function HandlerNameCourse(course) {
  return { name: course.name };
}
let newNameCourses = courses.map(HandlerNameCourse);
console.log(newNameCourses);

/* -----------------------------------
 * 🔹 7. reduce() — Gom dữ liệu lại
 * -----------------------------------
 * ➜ Dùng để tính toán/tích lũy (tổng, trung bình, gộp chuỗi,…)
 */
let i = 0;
function totalCoinCourse(accumulator, currentValue, currentIndex, originArray) {
  i++;
  // In ra từng lần chạy để dễ hiểu
  console.table({
    "Lượt chạy": i,
    "Giá trị tích lũy": accumulator,
    "Coin hiện tại": currentValue.coin,
    Index: currentIndex,
  });
  // Tích lũy coin lại
  return accumulator + currentValue.coin;
}
let totalCoinCourses = courses.reduce(totalCoinCourse, 0);
console.log("Tổng coin bằng reduce 👉", totalCoinCourses);

// 🆚 So sánh với loop thường
let totalCoin = 0;
for (const course of courses) {
  totalCoin += course.coin;
}
console.log("Tổng coin bằng loop 👉", totalCoin);

/* -----------------------------------
 * 🔹 Reduce — Làm phẳng mảng (Flat array)
 * -----------------------------------
 * ➜ Dùng để gộp mảng con thành mảng 1 cấp
 */
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// Hàm xử lý từng phần tử trong reduce
function flatArrayHandler(flatOutput, depthItem) {
  // concat() dùng để gộp phần tử/mảng vào mảng mới
  return flatOutput.concat(depthItem);
}

let flatArray = depthArray.reduce(flatArrayHandler, []);
console.log(flatArray);

/* -----------------------------------
 * 🔹 Reduce — Lấy toàn bộ khoá học trong topics
 * -----------------------------------
 * ➜ Mỗi topic chứa nhiều courses → gom lại thành 1 mảng duy nhất
 */
let topics = [
  {
    topic: "Front-end",
    courses: [
      { id: 1, title: "HTML, CSS" },
      { id: 2, title: "Vue, Tailwind" },
      { id: 3, title: "React, Bootstrap" },
    ],
  },
  {
    topic: "Back-end",
    courses: [
      { id: 1, title: "Node JS, Javascript" },
      { id: 2, title: "Spring Boot, Java" },
      { id: 3, title: "Angular, Python" },
    ],
  },
];

function newCoursesTopicHandler(course, topic) {
  // Gộp tất cả các courses của từng topic vào mảng chung
  return course.concat(topic.courses);
}

let newCoursesTopic = topics.reduce(newCoursesTopicHandler, []);
console.log(newCoursesTopic);

// Map để render ra HTML dạng thẻ <div>
var htmlCourses = newCoursesTopic.map(function (course) {
  return `
    <div>
      <h2>${course.title}</h2>
      <p>ID: ${course.id}</p>
    </div>
  `;
});

console.log(htmlCourses.join("")); // join() để nối thành 1 chuỗi HTML hoàn chỉnh

/* -----------------------------------
 * 🧩 BÀI TẬP 1: Tính tổng số huy chương vàng
 * -----------------------------------
 * ➜ Input: mảng các môn thể thao
 * ➜ Output: tổng số huy chương vàng
 */
var sports = [
  { name: "Bơi lội", gold: 11 },
  { name: "Boxing", gold: 3 },
  { name: "Đạp xe", gold: 4 },
  { name: "Đấu kiếm", gold: 5 },
];

function getTotalGold(sports) {
  // Dùng reduce để cộng dồn số vàng
  return sports.reduce(function (totalGold, sport) {
    return (totalGold += sport.gold);
  }, 0);
}

// ✅ Expected result:
console.log(getTotalGold(sports)); // 👉 23

/* -----------------------------------
 * 🧩 BÀI TẬP 2: Lọc các môn thể thao yêu thích
 * -----------------------------------
 * 👉 Viết hàm getMostFavoriteSport(sports)
 *    - Input: 1 mảng chứa các object { name, like }
 *    - Output: Mảng mới chỉ chứa những môn có like > 5
 */
const sportsLike = [
  { name: "Bóng rổ", like: 6 },
  { name: "Bơi lội", like: 5 },
  { name: "Bóng đá", like: 10 },
];

function getMostFavoriteSport(sports) {
  // Dùng filter để lọc ra những môn có like > 5
  return sports.filter(function (sport) {
    return sport.like > 5;
  });
}

// ✅ Kỳ vọng
console.log(getMostFavoriteSport(sportsLike));
// 👉 [{ name: 'Bóng rổ', like: 6 }, { name: 'Bóng đá', like: 10 }]
/* --------------------------------------------------------------
 * 📋 TỔNG HỢP CÁC PHƯƠNG THỨC MẢNG TRONG JS
 * --------------------------------------------------------------
 * | Method   | Trả về      | Mục đích                            |
 * |----------|-------------|------------------------------------ |
 * | forEach  | undefined   | Duyệt qua mảng                      |
 * | every    | boolean     | Kiểm tra tất cả thỏa điều kiện      |
 * | some     | boolean     | Kiểm tra chỉ cần 1 thỏa điều kiện   |
 * | find     | object      | Lấy phần tử đầu tiên thỏa điều kiện |
 * | filter   | array       | Lọc danh sách thỏa điều kiện        |
 * | map      | array       | Biến đổi mảng sang mảng mới         |
 * | reduce   | any         | Tích lũy kết quả (tổng, gộp, v.v)   |
 * --------------------------------------------------------------
 */

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
 * ----------------------------------- */
courses.forEach((course, index) => {
  console.log(index, course);
});

/* -----------------------------------
 * 🔹 2. every() — Kiểm tra TẤT CẢ phần tử
 * ----------------------------------- */
let isFreeEvery = courses.every((course) => course.coin === 0);
console.log("Tất cả đều free? 👉", isFreeEvery);

/* -----------------------------------
 * 🔹 3. some() — Kiểm tra CHỈ CẦN 1 phần tử
 * ----------------------------------- */
let isFreeSome = courses.some((course) => course.coin === 0);
console.log("Có khóa học nào free không? 👉", isFreeSome);

/* -----------------------------------
 * 🔹 4. find() — Tìm phần tử ĐẦU TIÊN
 * ----------------------------------- */
let firstFrontEnd = courses.find(
  (course) => course.name === "Front End Develop"
);
console.log("Tìm bằng find() 👉", firstFrontEnd);

/* -----------------------------------
 * 🔹 5. filter() — Lọc danh sách
 * ----------------------------------- */
let listCourse = courses.filter(
  (course) => course.name === "Front End Develop"
);
console.log("Danh sách khóa Front End Develop 👉", listCourse);

/* -----------------------------------
 * 🔹 6. map() — Biến đổi từng phần tử → mảng mới
 * ----------------------------------- */
let newCourses = courses.map((course, index) => ({
  id: course.id,
  name: `Khóa học ${course.name}`,
  coin: course.coin,
  coinText: `Giá: ${course.coin}`,
  index: index,
  originArray: course,
}));
console.log(newCourses);

// Lấy danh sách chỉ có tên khóa học
let newNameCourses = courses.map((course) => ({ name: course.name }));
console.log(newNameCourses);

/* -----------------------------------
 * 🔹 7. reduce() — Gom dữ liệu lại
 * ----------------------------------- */
let i = 0;
function totalCoinCourse(accumulator, currentValue, currentIndex, originArray) {
  i++;
  console.table({
    "Lượt chạy": i,
    "Tích lũy": accumulator,
    "Coin hiện tại": currentValue.coin,
    Index: currentIndex,
  });
  return accumulator + currentValue.coin;
}
let totalCoinCourses = courses.reduce(totalCoinCourse, 0);
console.log("Tổng coin bằng reduce 👉", totalCoinCourses);

// So sánh với loop thường
let totalCoin = 0;
for (const course of courses) totalCoin += course.coin;
console.log("Tổng coin bằng loop 👉", totalCoin);

/* -----------------------------------
 * 🔹 Reduce — Làm phẳng mảng (Flat array)
 * ----------------------------------- */
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray = depthArray.reduce((flat, item) => flat.concat(item), []);
console.log(flatArray);

/* -----------------------------------
 * 🔹 Reduce — Lấy toàn bộ khoá học trong topics
 * ----------------------------------- */
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

let newCoursesTopic = topics.reduce(
  (all, topic) => all.concat(topic.courses),
  []
);
console.log(newCoursesTopic);

// Render ra HTML (giả lập)
let htmlCourses = newCoursesTopic.map(
  (course) => `
  <div>
    <h2>${course.title}</h2>
    <p>ID: ${course.id}</p>
  </div>
`
);
console.log(htmlCourses.join(""));

/* -----------------------------------
 * 🔹 8. includes() — Kiểm tra chuỗi/mảng
 * ----------------------------------- */
// String
let title = "Responsive web design";
console.log(title.includes("web", 11)); // false

// Array
let coursesArray = ["PHP", "Java", "JS"];
console.log(coursesArray.includes("Java")); // true

// Bài tập includes
let cars = ["Rolls-Royce", "Mercedes", "Lexus", "BMW", "Audi"];
function checkCar(cars) {
  return cars.includes("Mercedes", 2);
}
console.log(checkCar(cars)); // false

/* -----------------------------------
 * 🎬 Bài tập reduce() — Tính điểm trung bình IMDB
 * ----------------------------------- */
function calculateRating(watchList) {
  let directorNolan = watchList.filter(
    (film) => film.Director === "Christopher Nolan"
  );
  let total = directorNolan.reduce(
    (sum, film) => sum + parseFloat(film.imdbRating),
    0
  );
  return total / directorNolan.length;
}
console.log(calculateRating(watchList));

/* -----------------------------------
 * 🔹 Mô phỏng reduce() — Viết lại reduce2
 * ----------------------------------- */
Array.prototype.reduce2 = function (callback, initialValue) {
  let i = 0;
  let result = initialValue ?? this[0];
  if (initialValue === undefined) i = 1;
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, num) => total + num, 0);
console.log(result); // 15

/* -----------------------------------
 * 🔹 Bài tập: Chuyển arr → obj bằng reduce
 * ----------------------------------- */
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];

function arrToObj(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

/* -----------------------------------
 * 🏅 Bài tập 1: Tính tổng số huy chương vàng
 * ----------------------------------- */
var sports = [
  { name: "Bơi lội", gold: 11 },
  { name: "Boxing", gold: 3 },
  { name: "Đạp xe", gold: 4 },
  { name: "Đấu kiếm", gold: 5 },
];

function getTotalGold(sports) {
  return sports.reduce((total, sport) => total + sport.gold, 0);
}
console.log(getTotalGold(sports)); // 23

/* -----------------------------------
 * 🏆 Bài tập 2: Lọc môn thể thao yêu thích
 * ----------------------------------- */
const sportsLike = [
  { name: "Bóng rổ", like: 6 },
  { name: "Bơi lội", like: 5 },
  { name: "Bóng đá", like: 10 },
];

function getMostFavoriteSport(sports) {
  return sports.filter((sport) => sport.like > 5);
}
console.log(getMostFavoriteSport(sportsLike));

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

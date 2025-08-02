let menus = document.querySelectorAll(".title");
let openText = document.querySelectorAll(".myText");


menus.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log(el.nextElementSibling);
    remover();
    el.nextElementSibling.classList.toggle("active");
  })
})

function remover() {
  openText.forEach((ele) => {
    ele.classList.remove("active");
  })
}




















// Test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// dạng 1 chỉ cần value
numbers.forEach((num) => {
  console.log(num);
});

// gán value
for (const num1 of numbers) {
  console.log(num1);
}

// Đếm số index
for (const num2 in numbers) {
  console.log(num2);
}
//Đề: Cho mảng sau, hãy dùng forEach() để tính tổng các số chẵn trong mảng.
const numbersTong = [3, 6, 1, 8, 4, 5, 10];

numbersTong.forEach((numTon) => {
  if (numTon % 2 == 0) {
    let total = +numTon;
  }
  console.log(total);
});


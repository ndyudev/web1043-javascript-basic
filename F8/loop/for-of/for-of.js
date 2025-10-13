// Video 99: For Of - Loop
console.log("--- Video 99: For Of - Loop --");

let languages = [
    'PHP',
    'JS',
    'GO',
    'Java'
]
// Duyệt theo value
for (let value of languages) {
    console.log(value);
}
// Chuổi - String
let myString = 'ndyudev';

for (let value of myString) {
  console.log(value);
}

// Object

let myInfo = {
    name: 'ndyudev',
    age: 19,
    address: 'Ho Chi Minh City'
}
// Không duyệt được value Object theo cách thông thường
// for (const value of myInfo) {
//     console.log(value);
// }

// Cách 1: Lấy key từ Object
console.log(Object.keys(myInfo)); // Lấy key - return Array

for (const value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}
// Cách 2: Lấy value từ Object
console.log(Object.values(myInfo)); // Lấy value - trả mảng

for (const value of Object.values(myInfo)) {
  console.log(value);
}
// Video 97. For in / Loop
console.log("Video 97. For in / Loop");

let myInfo = {
    name: 'DyuDev',
    age: 19,
    address: 'Ho Chi Minh City'
}
// Duyệt qua key
for (const key in myInfo) {
    console.log(key);
}

for (const key in myInfo) {
  console.log(myInfo[key]);
}

for (const key in myInfo) {
  console.log(typeof key); // Ouput: String
}
let languages = [
    'Java',
    'Python',
    'GO',
    'JS'
]
// Duyệt theo index ở Array
for (const key in languages) {
    console.log(key);  
}

for (const key in languages) {
  console.log(languages[key]);
}

// Duyệt ở chuỗi / String
let myString = "ndyudev";
for (const key in myString) {
    console.log(myString[key]);
}

for (const key in myString) {
  console.log(key);
}

// 97. Bài Tập:  Bài tập sử dụng for...in

function run(object) {
    let result = [];
    for(const key in object) {
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
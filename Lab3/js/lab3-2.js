let a = prompt("Nhập số bạn muốn in bảng cửu chương");
let output = "";

for (let i = 1; i <= 10; i++) {
    let kq = a * i;
    output += `${a} x ${i} = ${kq}<br>`;
}

document.getElementById('result').innerHTML = output;

console.log(output);

let language = "Javascript"
let js = `${language}`;

console.log(typeof(js));
console.log(js);
console.log("Châu Nhật Duy");
console.log("Hello word!");



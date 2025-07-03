let a = parseInt(prompt("Nhập giá trị của a:"));
let b = parseInt(prompt("Nhập giá trị của b:"));

let cong = a + b;
let tru = a - b;
let nhan = a * b;
let chia = a / b;
let chialaydu = a % b;

document.getElementById("a").innerHTML = `a = ${a}`;
document.getElementById("b").innerHTML = `b = ${b}`;

let output = `
    <p>a + b = ${cong}</p>
    <p>a - b = ${tru}</p>
    <p>a * b = ${nhan}</p>
    <p>a / b = ${chia}</p>
    <p>a % b = ${chialaydu}</p>
`;

document.getElementById("result").innerHTML = output;

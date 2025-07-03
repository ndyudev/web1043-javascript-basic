let a = parseFloat(prompt("Nhập giá trị của a:"));
let b = parseFloat(prompt("Nhập giá trị của b:"));
let o = prompt("Nhập phép toán bạn muốn( + , - , * , /):")

switch(o) {
    case '+':
        var kq = a + b
        document.getElementById("result").innerHTML = kq
    case '-':
        if(a < b ){
            alert("B phải lớn hơn A");
        };
        var kq = a - b
        document.getElementById("result").innerHTML = kq    
    case '*':
        var kq = a * b
        document.getElementById("result").innerHTML = kq
    case '/':
        var kq = a / b
        document.getElementById("result").innerHTML = kq
}

console.log(typeof(a))



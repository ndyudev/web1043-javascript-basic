// Mảng chứa các lựa chọn
var arr = ['Rock', 'Paper', 'Scissors'];

// Hàm xử lý khi người dùng chọn
function getValue(c) {
    // Máy tính chọn ngẫu nhiên
    var s = Math.floor(Math.random() * 3);

    // Hiển thị lựa chọn của người chơi và máy
    document.getElementById('detail').innerHTML =
        "You: " + arr[c] + " | Computer: " + arr[s];

    // So sánh kết quả
    if (c === s) {
        document.getElementById('result').innerHTML = "Equal (Hoà)";
    } else {
        // Xử lý logic thắng thua
        switch (c) {
            case 0: // Rock
                if (s === 2) {
                    document.getElementById('result').innerHTML = "You Win! (Rock beats Scissors)";
                } else {
                    document.getElementById('result').innerHTML = "You Lose! (Paper beats Rock)";
                }
                break;
            case 1: // Paper
                if (s === 0) {
                    document.getElementById('result').innerHTML = "You Win! (Paper beats Rock)";
                } else {
                    document.getElementById('result').innerHTML = "You Lose! (Scissors beats Paper)";
                }
                break;
            case 2: // Scissors
                if (s === 1) {
                    document.getElementById('result').innerHTML = "You Win! (Scissors beats Paper)";
                } else {
                    document.getElementById('result').innerHTML = "You Lose! (Rock beats Scissors)";
                }
                break;
        }
    }
}
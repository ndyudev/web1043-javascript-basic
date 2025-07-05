var a = null, b = null, o = null;
var nhap_b = false;

function updateDisplay(val) {
    document.getElementById('display').value = val || '';
}

function lam_lai() {
    a = null;
    b = null;
    o = null;
    nhap_b = false;
    updateDisplay('');
}

function toan_hang(x) {
    if (!nhap_b) {
        if (a === null) a = x;
        else a = a * 10 + x;
        updateDisplay(a);
    } else {
        if (b === null) b = x;
        else b = b * 10 + x;
        updateDisplay(a + ' ' + o + ' ' + b);
    }
}

function toan_tu(x) {
    if (a !== null) {
        o = x;
        nhap_b = true;
        updateDisplay(a + ' ' + o);
    }
}

function thuc_hien() {
    if (a !== null && b !== null && o !== null) {
        var c;
        switch (o) {
            case '+':
                c = a + b;
                break;
            case '-':
                c = a - b;
                break;
            case 'x':
                c = a * b;
                break;
            case ':':
                if (b === 0) {
                    alert('Không thể chia cho 0!');
                    lam_lai();
                    return;
                }
                c = a / b;
                break;
            default:
                alert(o + ' không phải toán tử');
                lam_lai();
                return;
        }
        updateDisplay(c);
        setTimeout(lam_lai, 1200);
    }
}

// Khởi tạo lại khi load trang
lam_lai();

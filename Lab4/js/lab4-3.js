let currentDateTime = new Date();



function reload() {
    let h = currentDateTime.getHours();
    let m = currentDateTime.getMinutes();
    let s = currentDateTime.getSeconds();
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}


window.setTimeout(reload(), 1000);
// location.reload();


function toTheRight() {
    let b = document.getElementById('block');
    let x = 0;
    setInterval(function() {
        if(x === 600) {
            clearInterval();
        } else{
            x++;
            b.style.left = x + 'px';
        }
    }, 2)
}
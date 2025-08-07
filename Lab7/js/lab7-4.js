let stars = document.querySelector(".stars");
let star = document.querySelectorAll(".star");
let output = document.querySelector(".output");


star.forEach((star, index) => {
    star.starValue = index + 1;
    star.addEventListener('click',starRate )
})


function starRate(e) {
    output.innerHTML = `You rate this ${ e.target.starValue }`;
    star.forEach((star, index) => {
        if(index < e.target.starValue) {
            star.classList.add("orange");
        } else {
            star.classList.remove("orange");
        }   
    })
}

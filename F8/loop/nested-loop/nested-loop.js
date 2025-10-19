// Video 103: Vòng lặp lòng nhau - Nested Loop
console.log("Video 103: Vòng lặp lòng nhau - Nested Loop");

let myArray = [
    [2,3],
    [4,5],
    [6,7],
]

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
    }
}

myArray.forEach((m) => {
  console.log(m); 
})
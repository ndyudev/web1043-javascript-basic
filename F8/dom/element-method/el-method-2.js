// #Video 135
// Cách 1
let listItemNodes = document.querySelectorAll(".box-1 li")

// Cách 2: lấy box trước rồi mới lấy li
let boxNode = document.querySelector(".box-1")

let ItemNodes = boxNode.children[0].children[0]
console.log(ItemNodes);
// #Video 136
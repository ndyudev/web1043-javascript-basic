// Lấy qua id, class, tag 

let container = document.getElementsByClassName("container")

let heading = document.getElementById("heading");

let body = document.getElementsByClassName("body")

let tag = document.getElementsByTagName("p")

let heading2 = document.querySelector(".hd2");

let heading2All = document.querySelectorAll(".hd2");

console.log(heading2All[1]); // node list như array


// HTML Collection

console.log({
  element: heading,
  body: body
});




// # Video 134: Practice get element method

var productsListElement = document.querySelector("div.products-list");
var firstProductElement = document.querySelectorAll("div.product")[0];
var buttonElements = document.getElementsByTagName("button");

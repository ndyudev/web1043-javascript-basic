// Homework at home
function display() {
  let pro = document.getElementById("pro");
  let qty = document.getElementById("qty");

  let name = pro.innerText;
  let price = parseFloat(pro.getAttribute("data-price"));
  let amount = price * parseInt(qty.value);

  document.getElementById("name").innerHTML = name;
  document.getElementById("amount").innerHTML = amount;
}

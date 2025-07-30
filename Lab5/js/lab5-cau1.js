// Làm trên trường
function display(obj) {
  // let product = document.getElementById("pro");
  let product = obj.previousElementSibling.previousElementSibling;
  let name = product.innerText;
  let price = parseFloat(product.getAttribute("data-price"));
  // let qty = document.getElementById("qty");
  let qty = obj.previousElementSibling;
  let quantity = parseFloat(qty.value);
  // console.log(quantity);
  let amount = quantity * price;
  // document.getElementById("name").innerText = name;
  obj.nextElementSibling.nextElementSibling.children[0].innerText = name;
  obj.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText = amount;
}

let listProduct = [
  {
    id: 1,
    name: "IPhone 13",
    price: 1950,
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    price: 2400,
  },
  {
    id: 3,
    name: "Xiaomi Redmi 12",
    price: 1500,
  },
];


function showProduct(product) {
  return `
    <div class="box25">
      <label data-price="${product.price}">${product.name}</label>
      <input type="number" value="1" />
      <button onclick="display(this)">Oke</button>
      <hr />
      <h3>Name: <span class="name">?</span></h3>
      <h3>Amount: <span class="amount">?</span></h3>
    </div>`;
}


function showFullProduct(list) {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    html += showProduct(list[i]);
  }
  document.getElementById("box-product").innerHTML = html;
}


showFullProduct(listProduct);

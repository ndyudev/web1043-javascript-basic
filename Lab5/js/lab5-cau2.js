let ProductList = [
  { id: 1, title: "Iphone X", price: 1950 },
  { id: 2, title: "Samsung S23 Ultra", price: 2045 },
  { id: 3, title: "Xiaomi Redmi Note 12", price: 1785 },
  { id: 4, title: "Xiaomi Redmi Note 12", price: 1785 },
  { id: 5, title: "Xiaomi Redmi Note 12", price: 1785 },
  { id: 6, title: "Xiaomi Redmi Note 12", price: 1785 },
  { id: 7, title: "Xiaomi Redmi Note 12", price: 1785 },
];

function showProduct() {
  let productlist = "";
  for (let i = 0; i < ProductList.length; i++) {
    productlist += `<tr>
        <td>${ProductList[i].title}</td>
        <td>$ ${ProductList[i].price}</td>
        <td><button onclick="addProduct(this)">Add</button></td>
      </tr>`;
  }
  document.getElementById("product").innerHTML = productlist;
}

function addProduct(button) {
  // Đi ra cha 2 lần và copy cả cây của node
  let row = button.parentElement.parentElement.cloneNode(true);
  // Đổi tên
  let btnRemove = row.getElementsByTagName("button")[0];
  btnRemove.innerText = "Remove";
  btnRemove.setAttribute("onclick", "removeProduct(this)");
  document.getElementById("cart").appendChild(row);
  totalCart();
}

showProduct();

function removeProduct(button) {
  let row = button.parentElement.parentElement;
  document.getElementById("cart").removeChild(row);
  totalCart();
}

function totalCart() {
  let cart = document.getElementById("cart");
  let rows = cart.getElementsByTagName("tr");
  var total = 0;
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    var price = cells[1].innerText.substring(1);
    total += 1 * price;
  }
  document.getElementById("tong").innerText = total;
}

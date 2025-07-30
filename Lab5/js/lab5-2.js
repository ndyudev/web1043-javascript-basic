// Homework at home
function addProduct(button) {
  // Lấy hàng chứa nút Add
  const row = button.parentElement.parentElement;

  // Lấy thông tin sản phẩm
  const name = row.children[0].innerText;
  const price = parseFloat(row.children[1].innerText.replace('$', ''));

  // Tạo hàng mới cho giỏ hàng
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${name}</td>
    <td>$${price.toFixed(2)}</td>
    <td><button onclick="removeProduct(this, ${price})">Remove</button></td>
  `;

  // Thêm vào giỏ hàng
  document.getElementById('cart').appendChild(newRow);

  // Cập nhật tổng tiền
  const tong = document.getElementById('tong');
  tong.innerText = (parseFloat(tong.innerText) + price).toFixed(2);
}

function removeProduct(button, price) {
  // Xóa dòng
  const row = button.parentElement.parentElement;
  row.remove();

  // Cập nhật lại tổng tiền
  const tong = document.getElementById('tong');
  tong.innerText = (parseFloat(tong.innerText) - price).toFixed(2);
}

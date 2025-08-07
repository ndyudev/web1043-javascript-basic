const noiThanh = document.getElementById("place_noi_thanh");
const ngoaiThanh = document.getElementById("place_ngoai_thanh");
const shippingFee = document.querySelector(".shipping-fee");

function updateShippingFeeDisplay() {
  if (noiThanh.checked) {
    shippingFee.style.display = "none";
  } else {
    shippingFee.style.display = "block";
  }
}

function kiemTra() {
  let sp = document.querySelector(".product");
  if (sp.value.trim().length === 0) {
    alert("Vui lòng nhập tên sản phẩm!");
    return false;
  }

  let price = document.querySelector(".price");
  let priceVal = parseFloat(price.value);
  if (isNaN(priceVal) || priceVal <= 0) {
    alert("Vui lòng nhập giá là số và lớn hơn 0!");
    return false;
  }
  alert("Chúc mừng bạn đã nhập đúng");
  return true;
}

window.addEventListener("DOMContentLoaded", () => {
  updateShippingFeeDisplay();
  noiThanh.addEventListener("change", updateShippingFeeDisplay);
  ngoaiThanh.addEventListener("change", updateShippingFeeDisplay);
});

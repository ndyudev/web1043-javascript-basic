// Tạo một mảng lưu trữ một kho các mặt hàng.
let products = [];

// Tạo 3 product có thuộc tính ( object )
let product = {
  name: "Iphone 14",
  model: "Pro Max",
  cost: 21,
  quantity: 50,
};

let product2 = {
  name: "Iphone 14",
  model: "Pro Max",
  cost: 21,
  quantity: 50,
};

let product3 = {
  name: "Iphone 14",
  model: "Pro Max",
  cost: 21,
  quantity: 50,
};
// Đưa 3 đối tượng vừa tạo vô array
products.push(product);
products.push(product2);
products.push(product3);
// Xuất mảng
console.log(products);

// Truy xuất quantity element thứ 3
console.log(products[2].quantity);

// Thêm và truy xuất thêm các phần tử khác
let product4 = {
  name: "Iphone 15",
  model: "Pro Max",
  cost: 26,
  quantity: 99,
};
products.push(product4)
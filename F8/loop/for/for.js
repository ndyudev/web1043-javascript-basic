let array = [1,2,3,4,5]

for (let i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}

console.log(array.length);

for (var i = 1; i < 8; i++) {
    console.log(i);
    
}


// Bài tập: 
/* 
Tạo danh sách số ngẫu nhiên
Cập nhật tháng 4 năm 2022

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như: làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max. */

let getRandNumbers = (min, max, length) => {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    let random = Math.random() * (max - min) + min;
    arr.push(random);
  }
  return arr;
};

// Bài tập: 
/* 
Tính tổng các phần tử là số của mảng


Cho trước mảng numbers, hãy viết hàm getTotal 
trả về tổng giá trị các phần tử của mảng.*/

function getTotal(arr) {
    let result = 0
    let i = 0
    for (; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}


// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
// Video 95
console.log("--- Vòng lặp for 3 ---");

let myArray = [
  'JS',
  'PHP',
  'Python'
]

let arrayLength = myArray.length; // Chỉ mất 1 lần để đọc đồ dài của mảng thay vì gọi từng lần trong for

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[arrayLength - 1]);
}
// 96.Bài tập: Tính tổng giá trị đơn hàng 
/* 
Tính tổng giá trị đơn hàng
Cập nhật tháng 6 năm 2022

Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.

Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.

*/

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    let total = 0;
    let ordersLength = orders.length;
    for(let i =0; i < ordersLength; i++){
        total += orders[i].price;
    }
    return total;
}


// Expected results:
getTotal(orders) // Output: 8700000

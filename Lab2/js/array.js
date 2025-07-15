/* 
Bài 4 (2 điểm): 

Cho mảng sau const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']]; - - - - - - 
Xoá phần tử đầu tiên và phần tử cuối cùng của mảng 
Thêm 'FIRST' vào đầu mảng 
Thêm 'hello world' vào vị trí thứ 4 của mảng 
Thêm 'middle' vào vị trí thứ 3 của mảng 
Thêm 'LAST' vào cuối mảng 
Xuất kết quả 
*/

const theList = ["Lauren", "Kevin", true, 35, null, undefined, ["one", "two"]];

theList.unshift("FIRST");
theList.pop("FIRST");
theList.splice(4, 0, "hello world", 4);
theList.splice(3, 0, "middle");
console.log(typeof(theList[6]));
theList.push("LAST");

console.log(theList);

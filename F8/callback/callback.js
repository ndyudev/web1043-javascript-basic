// Call back?

// Là hàm , và được truyền qua đối số khi gọi hàm khác

function myFunction(param) {
    if(typeof param === 'function') {
        param('123') 
    }
}

function myCallBack(value) {
    console.log("Value:", value);
}

myFunction(myCallBack);
/**
 * Bài tập call back #118
 * Ở bài học này, các bạn hãy sử dụng kiến thức về callback vừa học ở bài trước 
 * để hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.
 */

function multiCb(a, b) {
    return b * a
}

function divCb(a, b) {
    return a / b
}

function subCb(a, b) {
    return a - b
}

function sumCb(a, b) {
    return a + b
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)); // Output: 3
console.log(caculate(1, 2, subCb)); // Output: -1
console.log(caculate(1, 2, multiCb));  // Output: 2
console.log(caculate(3, 1, divCb)); // Output: 3


// 
console.log("Call back phần 2 #119");

// 1. là hàm , và được truyền qua đối số, và được gọi lại

let courses = [
    'PHP',
    'JS',
    'Java'
]

// MapCallBack method
Array.prototype.mapCallBack = function(callback) {
    let arr = this.length
    let output = []
    for (let i = 0; i < arr; i++) {
        let result = callback(this[i], i)
        console.log('result:', result);
        output.push(result)
    }
    return output;
}

let htmls = courses.mapCallBack(function(course, index) {
    return `<h2>${index, course}</h2>`
})

console.log(htmls.join('-'));


// forEachCallBak method
Array.prototype.forEachCallBack = function(callback) {
    let thisLength = this.length
    for (let i = 0; i < thisLength; i++) {
        callback(this[i], i, this);
    }
}

courses.forEachCallBack((course, index, arr) => {
    console.log(course, index, arr);
})

console.log();



// FindCallBack method

let coursesObject = [
    { id: 1, name: "javascript", coin: 250 },
    { id: 2, name: "Front End Develop", coin: 0 },
    { id: 3, name: "Java Spring Boot", coin: 210 },
    { id: 4, name: "Full Stack MERN JS", coin: 340 },
];


Array.prototype.findCallBack = function(callback) {
    let thisLength = this.length;
    for (let i = 0; i < thisLength; i++) {
        let result = callback(this[i]);
        if(result) {
            return this[i];
        }
    }
}

console.log(
    coursesObject.findCallBack((course) => {
        return course.name === "javascript";
    })
);


// ReduceCallBack method
let coursesReduce = ["PHP", "JS", "Java"];


Array.prototype.reducecallBack = function(callback, init) {
    let arrayLength = this.length
    let idx = 0
    if (arguments.length < 2) {
        init = this[idx];
        idx++;
    }
    for (; idx < arrayLength; idx++) {
        init = callback(init, this[idx], idx, this);
    }
    return init
}

let coin = coursesReduce.reducecallBack((course, value) => {
    course.push(value);
    return course
}, []);

console.log(coin);

// #120: Thực hành tạo hàm myMap

const numbers = [1, 2, 3];


Array.prototype.myMap = function(cb) {
    let arrayLength = this.length
    let result = [];
    for (let i = 0; i < arrayLength; i++) {
        let output = cb(this[i], i)
        result.push(output)
    }
    return result;
}


// Expected results
console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]

// #121: Empty Elements of array
// Empty: không có cái gì ở đó cả

let coursesEmpty = [
    'Javascript',
    'PHP'
];

let arrNew = new Array(10) // truyền một sẽ hiểu là length 2 trở lên sẽ là phần tử mảng


console.log(arrNew);

coursesEmpty.length = 10; // 2 phần tử và 8 empty

arrNew.push[(1, 2, 3, 4)];

for (var indexCoursesEmpty of coursesEmpty) {
    console.log(indexCoursesEmpty);
}

console.log(coursesEmpty);
// #122: For each , hasOwnProperty bỏ qua các _proty_
// let coursesForEach = new Array(100);
let coursesForEach = [
    'Javascript',
    'Java',
    'PHP'
]

coursesForEach.push('Ruby', 'Python')

Array.prototype.forEachCall = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
};

coursesForEach.forEachCall((course, index, array) => {
    console.log(course, index, array);
})


// Video #123: Filter method - đưa vào mảng mới với các element đủ điều kiện return mảng mới

let coursesFilters = [
    { id: 1, name: "javascript", coin: 250 },
    { id: 2, name: "Front End Develop", coin: 0 },
    { id: 3, name: "Java Spring Boot", coin: 210 },
    { id: 4, name: "Full Stack MERN JS", coin: 340 },
];


Array.prototype.filterCall = function(callback) {
    let arrayLength = this.length
    let output = []
    for (let i = 0; i < arrayLength; i++ ) {
        if (callback(this[i], output.length, this)) {
            let result = this[i]
            output.push(result);
        }
    }
    return output
}

let filterCourses = coursesFilters.filterCall((course, index, array) => {
    return course.coin > 100;
});

console.log(filterCourses);
// #125: Bài tập myFilter method
const numbers1 = [1, 2, 3, 4];

Array.prototype.myFilter = function(cb) {
    let arr = []
    for (let index in this) {
        if (this.hasOwnProperty(index)) {  
            let result = cb(this[index], index, this)
            if (result) {
                arr.push(this[index]);
            }
        }
    }
    return arr
}

console.log(
    numbers1.myFilter(function (number) {
        return number % 2 === 0;
    })
);
// Output: [2, 4];


console.log(
    numbers1.myFilter(function (number) {
        return number % 2 === 0;
    })
);
// Output: [2, 4];

console.log(
    numbers1.myFilter(function (number) {
        return number % 2 === 0;
    })
);
// Output: [2, 4];

console.log(
    numbers1.myFilter(function (number, index) {
        return index % 2 === 0;
    })
);
// Output: [1, 3];

console.log(
    numbers1.myFilter(function (number, index, array) {
        return array.length % 2 === 0;
    })
); 
// Output: [1, 2, 3, 4]


// #126: Some method 

let coursesSome = [
    { id: 1, name: "javascript", coin: 250 },
    { id: 2, name: "Front End Develop", coin: 0 },
    { id: 3, name: "Java Spring Boot", coin: 210 },
    { id: 4, name: "Full Stack MERN JS", coin: 340 },
];


Array.prototype.someCall = function(callback) {
    let isFound = false;
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this);
            if (result) {
                isFound = true
                break;
            }
        }
    }
    return isFound
}

let courseIsFree = coursesSome.someCall((course, index, array) => course.coin === 0);

console.log(courseIsFree);



// #128: Every method 

let coursesEvery = [
    { id: 1, name: "javascript", coin: 250 },
    { id: 2, name: "Front End Develop", coin: 10 },
    { id: 3, name: "Java Spring Boot", coin: 210 },
    { id: 4, name: "Full Stack MERN JS", coin: 340 },
];


Array.prototype.everyCall = function(callback) {
    let isFound = true
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                isFound = false
                break;
            }
        }
    }
    return isFound
}

let courseNoFree = coursesEvery.everyCall(
    (course, index, array) => course.coin > 0
);

console.log(courseNoFree);





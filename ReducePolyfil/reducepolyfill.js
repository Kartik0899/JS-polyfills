// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


// const arr = [1, 2, 3, 4, 5];
// const res = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(res); // 15




// Polyfil for reduce() -

// arr.reduce((acc, curr, i, arr) => { }, initalValue) // reduce syntax

Array.prototype.myReduce = function (callback, initalValue) {
    var accumulator = initalValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator
}

const arr = [1, 2, 3, 4, 5];
const res = arr.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)

console.log(res);
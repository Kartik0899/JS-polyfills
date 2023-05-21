// using map function

// const nums = [1, 2, 3, 4, 5];
// const res = nums.map((num, i, nums) => {
//     return num * 3;
// })
// console.log(res);




// polyfil for map() - 

Array.prototype.myMap = function (callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this)) // In callback we will pass all the parameters which is passed in map() funtion
    }
    return temp;
}

const nums = [1, 2, 3, 4, 5, 6];
const result = nums.myMap((num, i, nums) => {
    return num * 3;
})

console.log(result);
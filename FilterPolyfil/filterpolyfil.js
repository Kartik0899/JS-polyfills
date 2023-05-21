// filter() - 

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.


// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const res = arr.filter((item, i, arr) => {
//     return item > 3;
// })

// console.log(res);




// Polyfil for filter() - 

Array.prototype.myFilter = function(callback){
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const res = arr.myFilter((item, i, arr) => {
    return item > 5;
})

console.log(res);
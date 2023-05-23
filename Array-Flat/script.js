
// Array.flat() method


// const inputArray = [1, 2, [3, 4], [5, [6]]];
// console.log(inputArray.flat());

// Polyfill of Array.flat() method ⬇

function myFalt() {
    const output = []

    function getFlattenData(arr) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (Array.isArray(element)) {
                getFlattenData(element)
            } else {
                output.push(element)
            }
        }
    }
    getFlattenData(this);
    return output;
}

Array.prototype.myFalt = myFalt;

const inputArray = [1, 2, [3, 4], [5, [6, 7, [8]]]];

console.log(inputArray.myFalt());
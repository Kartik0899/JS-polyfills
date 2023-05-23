
// Array.flat() method


// const inputArray = [1, 2, [3, 4], [5, [6]]];
// console.log(inputArray.flat());

// Polyfill of Array.flat() method ⬇

// Using FOR loop - 
// function myFalt() {
//     const output = []

//     function getFlattenData(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             if (Array.isArray(element)) {
//                 getFlattenData(element)
//             } else {
//                 output.push(element)
//             }
//         }
//     }
//     getFlattenData(this);
//     return output;
// }





// Using reduce method -
function myFalt() {
    function getFlattenData(arr) {
        const newArray = arr.reduce((acc, curr) => {
            if (Array.isArray(curr)) {
                acc = acc.concat(getFlattenData(curr))
            } else {
                acc = [...acc, curr]
            }
            return acc;
        }, [])
        return newArray;
    }
    return getFlattenData(this);
}

Array.prototype.myFalt = myFalt;

const inputArray = [1, 2, [3, 4], [5, [6, 7, [8]]]];

console.log(inputArray.myFalt());

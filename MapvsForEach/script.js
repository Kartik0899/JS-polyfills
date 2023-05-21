// map() vs forEach() -

// The map() method returns a new array, whereas the forEach() method does not return a new array.

// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

// In map() we can chain the other functions like .filter() but in forEach() we can't do this thing.


const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map((item) => {
    return item * 2;
})

console.log(mapResult);

const forEachResult = arr.forEach((item, i) => {
    arr[i] = item + 3;
})

console.log(forEachResult);
console.log(arr);
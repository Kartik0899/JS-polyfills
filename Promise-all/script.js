console.log("Pollyfill of promise.all");
// Promise 

// 1. fullfilled
// 2. pending
// 3. rejected


// Points - 
// Input  is array of promises or any values
// Return an array of results of input promise
// Wait for all the promises to be resolved or any to be rejected
// We will not get result if any of the promises is rejected
// But get in the code of all

const promise1 = new Promise((resolve, reject) => {
    resolve("Hello world Failed")
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // API call
        resolve("Hello world Success")
    }, 1000)
})

// Promise.all([promise1, promise2,10])
//     .then(result => console.log(result))
//     .catch(e => console.log(e))

// Till line no. 30 we were using the function


// Pollyfill of promise.all

Promise.Myall = (arrayofpromise) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;
        for (let i = 0; i < arrayofpromise.length; i++) {
            // In the below line we use Promise.resolve(arrayofpromise[i]) because to handle a value if the value is not a function
            Promise.resolve(arrayofpromise[i]).then(data => { 
                result[i] = data;
                count++;
                if(count === arrayofpromise.length)
                    resolve(result)
             }).catch(e => {
                reject(e);
             })
        }
    })
}

Promise.Myall([promise1, promise2,20])
    .then(result => console.log(result))
    .catch(e => console.log(e))
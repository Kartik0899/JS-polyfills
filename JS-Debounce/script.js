// Debounce in JS
let count = 0;

function getData() {
    // Write you api calling function
    console.log('hey', count++);
}

// now lets create a debounce function

let timer;
const debounce = function (fn, d) {
    return function () {
        let context = context,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

const debounceFunction = debounce(getData, 300)
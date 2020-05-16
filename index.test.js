const { forEach, map } = require('./index');
// the test for forEach
let sum = 0;
forEach([1, 2, 3], (value) => {
    sum += value;
});

// console.log(sum) to manually see the results in the terminal
// doing it this way is better than the console.log(sum) way
if (sum !== 6) {
    throw new Error('Expected summing array to equal 6');
}

// the test for map
const result = map([1, 2, 3], (value) => {
    return value * 2;
});
// result === [2, 4, 6]
if (result[0] !== 2) {
    throw new Error(`Expected to find 2, but found {result[0]}`);
}
if (result[1] !== 4) {
    throw new Error(`Expected to find 4, but found {result[0]}`);
}
if (result[2] !== 6) {
    throw new Error(`Expected to find 6, but found {result[0]}`);
}

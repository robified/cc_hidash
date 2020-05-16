const { forEach } = require('./index');

let sum = 0;
forEach([1, 2, 3], (value) => {
    sum += value;
});

// console.log(sum) to manually see the results in the terminal
// doing it this way is better than the console.log(sum) way
if (sum !== 6) {
    throw new Error('Expected summing array to equal 6');
}

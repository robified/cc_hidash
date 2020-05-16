const { forEach, map } = require('./index');

const test = (description, func) => {
    console.log('----', description);
    try {
        func();
    } catch (error) {
        console.log(error.message);
    }
};

test('The forEach function', () => {
    // the test for forEach
    console.log('Test for forEach');
    let sum = 0;
    forEach([1, 2, 3], (value) => {
        sum += value;
    });

    // console.log(sum) to manually see the results in the terminal
    // doing it this way is better than the console.log(sum) way
    if (sum !== 6) {
        throw new Error('Expected summing array to equal 6');
    }
    console.log("DIDN'T GET HERE!!!");
});

test('The mapfunction', () => {
    // the test for map
    console.log('Test for map');
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
});

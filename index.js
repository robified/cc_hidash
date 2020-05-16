module.exports = {
    forEach(array, func) {
        // v1
        // array.forEach();
        // for (let i = 0; i < array.length; i++) {
        //     const value = array[i];
        //     func(value, i);
        // }

        // v2 for In loop
        for (let index in array) {
            func(array[index], index);
        }
    },
    map(array, func) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(func(array[i], i));
        }
        return result;
    },
};

/* How we would manually test this function we just wrote
forEach([1, 2, 3], (value) => {
    console.log(value);
});

map([1,2,3], asdfjkl;)
console.log(blah blah blah)
*/

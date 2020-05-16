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
};

/* How we would manually test this function we just wrote
forEach([1, 2, 3], (value) => {
    console.log(value);
});
*/

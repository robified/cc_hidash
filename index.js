module.exports = {
    forEach(array, func) {
        // array.forEach()
        for (let i = 0; i < array.length; i++) {
            const value = array[i];
            func(value, i);
        }
    },
};

/* How we would manually test this function we just wrote
forEach([1, 2, 3], (value) => {
    console.log(value);
});
*/

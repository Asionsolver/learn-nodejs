// Math Object - Module scaffolding
const math = {};

// Get a random number between two integers
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

// Export the library
module.exports = math;
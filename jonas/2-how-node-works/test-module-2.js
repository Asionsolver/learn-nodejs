exports.add = (x, y) => x + y;
exports.subtract = (x, y) => x - y;
exports.multiply = (x, y) => x * y;
exports.divide = (x, y) => {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
};
exports.power = (x, y) => Math.pow(x, y);

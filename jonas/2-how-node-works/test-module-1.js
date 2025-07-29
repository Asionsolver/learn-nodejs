// class Calculator {
//   add(x, y) {
//     return x + y;
//   }
//   subtract(x, y) {
//     return x - y;
//   }
//   multiply(x, y) {
//     return x * y;
//   }
//   divide(x, y) {
//     if (y === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     return x / y;
//   }
//   power(x, y) {
//     return Math.pow(x, y);
//   }
// }

// module.exports = Calculator;

module.exports = class {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
  power(x, y) {
    return Math.pow(x, y);
  }
};

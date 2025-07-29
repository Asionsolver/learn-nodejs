const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

// This is a named export
// module.exports.sine = (a) => {
//   return Math.sin(a);
// };

const cos = (a) => {
  return Math.cos(a);
};

exports.cos = cos;

exports.tan = (a) => {
  return Math.tan(a);
};

const test = (a, b) => {
  return add(a, b) / sub(a, b);
};

// console.log(test(10, 5));

// module.exports = add; // this is the default export -> 1st
module.exports = { add, sub, mul, div }; // this is the named export -> 2nd
if (require.main === module) {
  console.log("hello from module.js");
  console.log(module);
}

// console.log("hello from global.js");

// setTimeout(() => {
//   console.log("hello from global.js after 2 seconds");
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// global.a = 10;
// console.log(global.a);

// var b = 20;
// console.log(global.b); // undefined

// function test() {
//   console.log("hello from test function");
// }

// console.log(global.test); // undefined
// console.log(global.test()); // TypeError: global.test is not a function

// console.log(module);
// console.log(module.id);

// import { add, sub, mul, div } from "./module/module.js"; // modern way

// const math = require("./module/module.js"); // old way

// console.log(math.add(10, 5));
// console.log(math.sub(10, 5));

const { add, sub, mul, div } = require("./module/module.js"); // old way
console.log(add(10, 5));
console.log(sub(10, 5));

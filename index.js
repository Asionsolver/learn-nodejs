// const _ = require('lodash');
// console.log(_.last([1, 2, 3]));

// console.log(__dirname);
// console.log(__filename);
const people =  require('./people');

console.log(people.people);

// console.log(people.sayHello('John'));

people.sayHello('John');

console.log(people.a);


// (function(exports={}, require, module, __filename, __dirname) {
//     var people = ["John", "Paul", "George", "Ringo"];
//     var a = 1;
    
//     function sayHello(name) {
//       console.log("Hello " + name);
//     }
    
//     console.log(module);

    // return module.exports; // invisibly return module object
// });



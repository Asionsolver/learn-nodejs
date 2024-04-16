var people = ["John", "Paul", "George", "Ringo"];
var a = 1;

function sayHello(name) {
  console.log("Hello " + name);
//   return "Greeting completed";
}

// console.log(module); // this will show the module object in the console. For example exports: {}

// module.exports = people;

// console.log(module); // this will show the module object in the console. For example exports: [ 'John', 'Paul', 'George', 'Ringo' ]

// module.exports = a;

module.exports = {
  people: people,
  a: a,
  sayHello: sayHello,
};

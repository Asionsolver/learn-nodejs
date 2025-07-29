const path = require("path");

const myCurrentPath = __filename;
// console.log(`Current file path: ${myCurrentPath}`);
console.log(path.basename(myCurrentPath));
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(myCurrentPath));

const pathObj = {
  dir: "local/path",
  base: "file.txt",
  ext: ".txt",
};

// console.log(pathObj);

console.log(path.format(pathObj));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute("../global/module/module.js"));

console.log(path.join("local", "path", "file.txt"));
console.log(path.join("local", "path", "..", "file.txt"));

console.log(path.resolve("local", "path", "file.txt"));
console.log(path.parse(myCurrentPath));

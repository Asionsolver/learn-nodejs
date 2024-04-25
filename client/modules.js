const path = require("path");
const os = require("os");
const fs = require("fs");
// const EventEmitter = require("events");

// PATH MODULES
// const myPath = 'E:\Code\learn-nodejs\people.js';

// console.log(path.basename(myPath));
// console.log(path.basename(myPath, '.js'));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));
// console.log(path.delimiter);

// OS MODULES
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus());

// FS MODULES
// console.log(fs.writeFileSync("myFile.txt", "Hello World!"));
// console.log(fs.appendFileSync("myFile.txt", "How are you?"));

// const data = fs.readFileSync('myFile.txt');
// console.log(data);

// Sync way
// const data = fs.readFileSync('myFile.txt', 'utf8');
// console.log(data);
// console.log(data.toString());

// Asynchronous way(Recommended way)
// const data = fs.readFile('myFile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

// console.log('Last line of code');

// const school = require("../school");

// const schoolObj = new school();

// schoolObj.on("bellRing", ({ period, text }) => {
//   console.log(`${period} ${text}`);
// });

// schoolObj.startPeriod();

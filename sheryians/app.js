const fs = require("fs");

// fs.writeFile(file, data[, options], callback)

// fs.writeFile("output.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// fs.appendFile("output.txt", "Adding this new line to the file\n", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//   } else {
//     console.log("File written successfully!");
//   }
// });

// fs.rename("output.txt", "hello.txt", (err) => {
//   if (err) {
//     console.error("Error renaming file:", err);
//   } else {
//     console.log("File renamed successfully!");
//   }
// });

// fs.copyFile("hello.txt", "./copy1/copy2.txt", (err) => {
//   if (err) {
//     // console.log("Error message: ", err.message);
//     // console.log("Error code: ", err.code);
//     // console.log("Error stack: ", err.stack);
//     // console.log("Error name: ", err.name);
//     // console.log("Error path: ", err.path);
//     // console.log("Error syscall: ", err.syscall);
//     // console.log("Error errno: ", err.errno);
//     // console.log("Error toString: ", err.toString());
//     // console.log("Error cause: ", err.cause);
//   } else {
//     console.log("File copied successfully!");
//   }
// });

// fs.unlink("hello.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//   } else {
//     console.log("File deleted successfully!");
//   }
// });

// fs.rmdir("./copy", { recursive: true }, (err) => {
//   if (err) {
//     console.error("Error deleting directory:", err);
//   } else {
//     console.log("Directory deleted successfully!");
//   }
// });

// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) {
//     console.error("Error deleting directory:", err);
//   } else {
//     console.log("Directory deleted successfully!");
//   }
// });

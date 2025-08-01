const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4; // Limit thread pool size to 1 for testing
setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Next Tick 1 finished"));
  process.nextTick(() => console.log("Next Tick 2 finished"));
  console.log("End of I/O callback");

  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(`Password hashing done in ${Date.now() - start} ms`);
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(`Password hashing done in ${Date.now() - start} ms`);
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(`Password hashing done in ${Date.now() - start} ms`);
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(`Password hashing done in ${Date.now() - start} ms`);
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(`Password hashing done in ${Date.now() - start} ms`);
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(`Password hashing done in ${Date.now() - start} ms`);
  // });
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(`Password hashing done in ${Date.now() - start} ms`);
  // });
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(`Password hashing done in ${Date.now() - start} ms`);
  // });
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(`Password hashing done in ${Date.now() - start} ms`);
  // });
  // crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
  //   console.log(`Password hashing done in ${Date.now() - start} ms`);
  // });
});

console.log("Hello from the top-level code");

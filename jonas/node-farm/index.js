const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////////////////
// FILE SYSTEM MODULE
// ! Blocking, synchronous way
// const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textInput);

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("File written successfully!");

// ! Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   return console.error("📖 Error reading start.txt:", err);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     if (err) return console.error(`Error reading ${data1}.txt:`, err);
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       if (err) return console.error("Error reading append.txt:", err);
//       console.log(data3);

//       const textOutput = `This is what we know about the avocado: ${data2}.\n${data3}\nCreated on ${Date.now()}`;
//       fs.writeFile("./txt/final.txt", textOutput, "utf-8", (err) => {
//         if (err) return console.error("Error writing final.txt:", err);
//         console.log("File written successfully! ✍️");
//       });
//     });
//   });
// });

// console.log("Will read file now...");

//////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// SERVER MODULE
// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   //   console.log(req.url);
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview") {
//     res.end("This is the OVERVIEW page! 🏠");
//   } else if (pathName === "/product") {
//     res.end("Hello from the PRODUCT page! 🌍");
//   } else {
//     // Handle 404 Not Found
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "Custom-Header": "Hello World",
//     });
//     res.end(
//       "<h1>Page not found!</h1><p>We can't find the page you are looking for. Please check the URL and try again.</p>"
//     );
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000... 🚀");
// });

/////////////////////////////////////////////////////
// SERVER MODULE with URL module
// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   //   console.log(req.url);
//   const pathName = req.url;
//   if (pathName === "/" || pathName === "/overview") {
//     res.end("This is the OVERVIEW page! 🏠");
//   } else if (pathName === "/product") {
//     res.end("Hello from the PRODUCT page! 🌍");
//   } else if (pathName === "/api") {
//     // Read the JSON file and send it as a response
//     fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
//       const productData = JSON.parse(data);
//       // console.log("Product data:", productData);
//       // console.log("typeof productData:", typeof productData);
//       // console.log("typeof data:", typeof data);

//       res.writeHead(200, {
//         "Content-type": "application/json",
//         "Custom-Header": "Hello World",
//       });
//       res.end(data);
//     });
//   } else {
//     // Handle 404 Not Found
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "Custom-Header": "Hello World",
//     });
//     res.end(
//       "<h1>Page not found!</h1><p>We can't find the page you are looking for. Please check the URL and try again.</p>"
//     );
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000... 🚀");
// });

// SERVER MODULE with URL module

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW page! 🏠");
  } else if (pathName === "/product") {
    res.end("Hello from the PRODUCT page! 🌍");
  } else if (pathName === "/api") {
    // Read the JSON file and send it as a response
    res.writeHead(200, {
      "Content-type": "application/json",
      "Custom-Header": "Hello World",
    });
    res.end(data);
  } else {
    // Handle 404 Not Found
    res.writeHead(404, {
      "Content-type": "text/html",
      "Custom-Header": "Hello World",
    });
    res.end(
      "<h1>Page not found!</h1><p>We can't find the page you are looking for. Please check the URL and try again.</p>"
    );
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000... 🚀");
});

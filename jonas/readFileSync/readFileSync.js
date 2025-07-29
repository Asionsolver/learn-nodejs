const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./data.json", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    // memory usage check
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`RAM used (readFileSync): ${used.toFixed(2)} MB`);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.end("Hello");
  }
});

server.listen(8002, () => {
  console.log("readFileSync server running at http://localhost:8002");
});

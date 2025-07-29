const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    fs.readFile("./data.json", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("File read error");
        return;
      }

      // memory usage check
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`RAM used (readFile): ${used.toFixed(2)} MB`);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.end("Hello");
  }
});

server.listen(8001, () => {
  console.log("readFile server running at http://localhost:8001");
});

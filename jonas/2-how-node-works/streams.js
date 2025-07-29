const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution one
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) {
  //       console.error("Error reading file:", err);
  //     }
  //     res.end(data);
  //   });

  // solution two
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log("Error reading file:", err);
  //     res.statusCode = 500;
  //     res.end("Internal Server Error");
  //   });

  // solution three
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  console.log("Request received!");
  console.log(req.url);
});
server.listen(8000, () => {
  console.log("Server listening on port 8000");
});

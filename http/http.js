const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Node.js World!");
    res.write("How are you?");
    res.end();
  }else if (req.url === "/about") {
    res.write("This is the about page");
    res.end();
  }else{
    res.write("Not found");
    res.end();
  }
});

// server.on('connection', () => {
//     console.log('New connection...');
// });

server.listen(3000);

console.log("Listening on port 3000...");




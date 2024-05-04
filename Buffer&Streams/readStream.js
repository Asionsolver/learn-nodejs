
const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.write("<html><head><title>Form</title></head></html>");
      res.write(
        "<body><form method='POST' action='/about'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
      );
      res.end();
    } else if (req.url === "/about" && req.method === "POST") {
      // console.log(req.data) // not showing any data because req is a readable stream
  
      const body = [];
      req.on("data", (chunk) => {
          body.push(chunk);
      });
  
      req.on("end", () => {
          console.log("Data received");
          const parsedBody = Buffer.concat(body).toString();
          // console.log(parsedBody)
          const message = parsedBody.split("=")[1];
          console.log(message);
          });
  
      res.write("Thanks for submitting the form");
      res.end();
    } else {
      res.write("Not found");
      res.end();
    }
  });
  
  // server.on('connection', () => {
  //     console.log('New connection...');
  // });
  
  server.listen(3000);
  
  console.log("Listening on port 3000...");
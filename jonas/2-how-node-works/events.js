const eventEmitter = require("events");
const http = require("http");

class Sale extends eventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale();
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", (saleData) => {
  console.log(
    `There was a new sale by ${saleData.name} for $${saleData.price}!`
  );
});

myEmitter.on("newSale", (saleData) => {
  console.log(`There are now ${saleData.stock} items left in stock.`);
});

myEmitter.emit("newSale", { name: "Ashis", price: 9, stock: 50 });

//////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received!");
});

server.on("request", (req, res) => {
  console.log("Another request received!");
});

server.on("close", () => {
  console.log("Server closed!");
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});

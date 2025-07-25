// generateData.js
const fs = require("fs");

const products = [];

for (let i = 0; i < 100000; i++) {
  products.push({ id: i, name: `Product ${i}`, price: i * 10 });
}

fs.writeFileSync("data.json", JSON.stringify(products));

const fs = require("fs");
const http = require("http");
const url = require("url");

// Import the replaceTemplate function from a separate module
const replaceTemplate = require("./modules/replaceTemplate");

// SERVER MODULE with URL module & synchronous file reading

const tempOverView = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
// console.log(dataObj);
const server = http.createServer((req, res) => {
  // console.log(`Request received for: ${req.url}`);
  // Parse the URL to get the pathname
  // console.log(`Parse URL:`, url.parse(req.url, true));
  const { pathname, query } = url.parse(req.url, true);
  // console.log(`Pathname: ${pathname}, Query:`, query);
  // const pathName = req.url;

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
      "Custom-Header": "This is Overview Page",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join("");

    const output = tempOverView.replace("{%PRODUCT_CARDS%}", cardsHtml);
    // console.log("Cards HTML:", cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
      "Custom-Header": "This is Product Page",
    });
    // console.log(`Query:`, query);
    const product = dataObj[query.id];
    // console.log(`Product:`, product);

    const output = replaceTemplate(tempProduct, product);
    // console.log(`Output:`, output);
    res.end(output);

    // API endpoint
  } else if (pathname === "/api") {
    // Read the JSON file and send it as a response
    res.writeHead(200, {
      "Content-type": "application/json",
      "Custom-Header": "Hello World",
    });
    res.end(data);

    // Not Found
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

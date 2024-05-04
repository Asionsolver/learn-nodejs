const http = require("http");


const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/BigData.txt`, 'utf8');

ourReadStream.on('data', (chunk) => {
    console.log('New chunk received:');
    console.log(chunk);
});

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/BigData.txt`, 'utf8');
const writeStream = fs.createWriteStream(`${__dirname}/writeStream.txt`);   

ourReadStream.on('data', (chunk) => {
    writeStream.write(chunk);
    console.log('New chunk received:');
});
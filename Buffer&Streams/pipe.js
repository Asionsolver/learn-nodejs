const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/BigData.txt`, 'utf8');
const ourWriteStream = fs.createWriteStream(`${__dirname}/pipe.txt`);   

ourReadStream.pipe(ourWriteStream);


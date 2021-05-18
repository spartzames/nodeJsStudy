const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./bufferStream.txt', { highWaterMark: 16 });
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./writeStream2.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);


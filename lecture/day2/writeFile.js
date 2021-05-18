const fs = require('fs').promises;

fs.writeFile('./writeme.txt', 'write me')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch ((err, data) => {
            throw err;
    });
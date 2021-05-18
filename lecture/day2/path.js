const path = require('path'); // window : \ , POSIX : /
console.log(path.join(__dirname, '..', '/var.js')); // join root dir 무시
console.log(path.resolve(__dirname, '..', '/var.js')); // resolve root dir 존중
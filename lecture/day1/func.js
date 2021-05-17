// import {odd, even} from './var';
const {odd, even} = require('./var'); // 노드 제공 함수

function checkOddEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddEven;
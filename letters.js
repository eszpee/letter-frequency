"use strict";
const fs = require("fs");

const wordlist = './wordlist_test.txt';

const wordArray = readInputArray(wordlist);
console.log(wordArray.length, wordArray[0]);

// get command line arguments
function readInputTxt(path) {
    return fs.readFileSync(path, 'utf8');
}
function readInputArray(path) {
    return readInputTxt(path).split(/\r?\n/);
}

// for frequency, iterate through lines of file


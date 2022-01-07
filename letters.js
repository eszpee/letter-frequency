"use strict";
const fs = require("fs");

const wordlist = './wordlist.txt';
const wordArray = readInputArray(wordlist);

// for frequency, iterate through lines of file
let freq = [];
wordArray.forEach(function(word) {
    if (word.length == 5) {
        let letters = [...new Set(word.split(''))];
        letters.forEach(function(letter) {
            if(freq[letter] === undefined) {
                freq[letter] = 1;
            }
            else {
                freq[letter]++;
            }
        })
    }
});
console.log("Letters by frequency in 5-letter words:");
Object.keys(freq).sort((a,b) => freq[b] - freq[a]).forEach(function(letter) {
    console.log(letter,freq[letter]);
})

function readInputTxt(path) {
    return fs.readFileSync(path, 'utf8');
}
function readInputArray(path) {
    return readInputTxt(path).split(/\r?\n/);
}



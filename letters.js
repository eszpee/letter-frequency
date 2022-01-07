"use strict";
const fs = require("fs");
const wordlist = './wordlist.txt';
const wordArray = readInputArray(wordlist);

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
console.log("Letters by frequency in 5-letter words (not counting multiple occurences within same word):");
let freqSorted = [];
Object.keys(freq).sort((a,b) => freq[b] - freq[a]).forEach(function(letter) {
    console.log(letter,freq[letter]);
    freqSorted.push(letter);
})

const charsToFind = freqSorted.slice(0,5);
console.log("Finding words with most common letters",charsToFind.join(', '));
let matches = [];
wordArray.forEach(function(word) {
    if (word.length == 5) {
        let found = true;
        charsToFind.forEach(function(chr) {
            if (!word.includes(chr)) {
                found = false;
            }
        });
        if (found) {
            matches.push(word);
        }
    }
});
console.log(matches);


function readInputArray(path) {
    return fs.readFileSync(path, 'utf8').split(/\r?\n/);
}



const input = require(`readline-sync`);
function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    console.log (longestWord);
  }
  
  let n = input.question("enter your sentence: ");
  findLongestWord(n);

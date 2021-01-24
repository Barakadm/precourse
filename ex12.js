
const input = require(`readline-sync`);
let n = input.question("enter your sentence: ");


let chars = {'a':'A','e':'E','i':'I','o':'O','u':'U','y':'Y'};
// var n = '234abc567bbbbac';
n = n.replace(/[aeiouy]/g, m => chars[m]);
console.log(n);
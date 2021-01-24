const input = require(`readline-sync`);
let n = input.question("enter your sentence: ");


console.log(n.replace(/ /g , "*"))

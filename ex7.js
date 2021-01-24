const input = require('readline-sync');
num = input.question("enter a positive number: ");
let total = 1
for (let i = 1; i <= num; i++) {
  total *= i
}
console.log(total);


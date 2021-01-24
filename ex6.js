const input = require('readline-sync');

let choose_num = input.question("please choose a number larger than 10: ");

while (choose_num < 11) {
    choose_num = input.question("please choose a number LARGER than 10: ");
    }

console.log("have a lovely day");    
    


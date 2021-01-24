
function sum(x, y) {
    if (x + y == 10) {
        console.log("makes 10");
      } 
        else
     {
        console.log("nope");
     }
   }
  

const input = require(`readline-sync`);
let x = input.question("Enter your  number: ");
// user typing
let y = input.question("Enter your  number: ");
// user typing
x = Number(x)
y = Number(y)
sum(x, y);
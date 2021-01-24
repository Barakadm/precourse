
function s1(x) {
    if (x === 0) {
        console.log("zero");
      } 
    if (x === 1) {
        console.log("one");
      }
    if (x === 2) {
        console.log("two");
      }
    if (x === 3) {
        console.log("three");
      }  
    if (x === 4) {
        console.log("four");
      }
  
    if (x === 5) {
        console.log("five");
      } 
    if (x === 6) {
        console.log("six");
      }
    if (x === 7) {
        console.log("seven");
      }
    if (x === 8) {
        console.log("eight");
      }
    if (x === 9) {
        console.log("nine");
      }
 }
  

const input = require(`readline-sync`);
let x = input.question("Enter your number: ");
// user typing
x = Number(x)
s1(x);
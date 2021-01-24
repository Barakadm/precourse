const { isInteger, number } = require("mathjs");
const input = require(`readline-sync`);
let user = input.questionInt("enter your number: ");

let axe = Array.from({length: user})



for (let index = 0; index < user ; index++) {
    let sun = Math.floor(Math.random() * 51)
    axe.splice(index ,user , sun)
    
}

console.log(axe);
var minimum = Math.min.apply(Math, axe);
var maximum = Math.max.apply(Math, axe);

console.log("the maximum is " + maximum + "  ,and the minimum is " + minimum);










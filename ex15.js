const input = require(`readline-sync`);

const array1 = input.question("enter your 1st string: ");
const array2 = input.question("enter your 2nd string: ");


let array4 = Array.of(array1 +" " +array2);
console.log(array4[0]);

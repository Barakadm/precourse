const input = require(`readline-sync`);
let people = input.questionInt("How many people are you going with?: ");
                  //let people2 = input.questionInt(" How many people are you going with? ");
// console.log(typeof(people));
                     //console.log(people2);
if (!Number.isInteger(people)) {
    throw "stop execution";}

let k = input.keyInYN("Should it be Kosher?")


        if (typeof(k) !="boolean") {
            throw "stop execution";}
    if(k == true);{
        let c = input.keyInYN("Should it be Kosher lemehadrin?")
        if (typeof(c) !="boolean") {
            throw "stop execution";}
     }

res = ["italian", "chinese", "icecream" ,"falafel", "desserts"]
let food = input.keyInSelect(res ,"What kind of food do you want?: ");
if (food > 5) {
    throw "stop execution";} 



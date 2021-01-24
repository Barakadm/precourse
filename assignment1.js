const input = require(`readline-sync`);
console.log("welcome to the quiz");
res = ["italian", "chinese", "icecream" ,"falafel"]
let food1 = input.keyInSelect(res ,"What kind of food do you want?: ")
foo = food1 
console.log(foo);
res1 = ["parpar", "pringles", "chitus" , "bamba"]
let food2 = input.keyInSelect(res1 ,"What kind of snack do you want?: ")
foo = food2 + foo
res2 = ["chicken", "steak", "salad" , "sandwitch"]
let food3 = input.keyInSelect(res2 ,"What kind of meal do you want?: ")
foo = food3 + foo
res3 = ["choclate", "gum", "candies" , "lolypop"]
let food4 = input.keyInSelect(res3 ,"What kind of candy do you want?: ")
foo = food4 + foo
res4 = ["water", "coca cola", "tempo" ,"seven up"]
let food5 = input.keyInSelect(res4 ,"What kind of candy do you want?: ")
foo = food5 + foo
foo = Math.round( foo / 3);
console.log(foo);
result= [
"healthy",
"medium",
"risky",
"very bad",
"omg"
]
console.log("your eating habbits are " + result[foo] );

//description of the program:
//sentnce1
//sentnce2
//sentnce3
//sentnce4
//f00 is growing by any question 
//foo is divided by 3 and getting typed as int
//a ready answer is associated with any result of foo 
//

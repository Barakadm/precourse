const { string, typeOf, number, log } = require("mathjs");
const input = require(`readline-sync`);
// declaring the words of the game 
// making the choosing of the word
// function of the game: getting user input, 
// testing that user input is by the rules.
// creating index for reviewing the user input.
// 
// the function is passing over all the letters of the chosen word and compering 
// to the user input for the first occurrence and then checking if there are more occurrences , 
// after finishing all the checks, the function will return the appropriate
// message to the user , so he could be notified and know how to continue accordingly

// 



 console.log(`
 |  |__ _____    ____    ____  
 |  |  \\__  \  /    \  / ___\ 
 |   Y  \/ __ \|   |  \/ /_/  >
 |___|  (____  /___|  /\___  / 
      \/     \/     \//_____/  
                               
    _____ _____    ____        
   /     \\__  \  /    \       
  |  Y Y  \/ __ \|   |  \      
  |__|_|  (____  /___|  /      
        \/     \/     \/     
 
      `);

const words = ['university', 'moon', 'shuttle', 'toyota', 'coldplay']
let wordchoose = words[Math.floor(Math.random() * 4) + 1];



let hidden = wordchoose.replace(/./g, '*').split('');
wordchoose = wordchoose.split('')
let attempt = 10
console.log(hidden.join(''));
function game() {


    let userguess = input.question("enter your guess:(only 1 letter) ");
    
    userguess = userguess.toLowerCase()
    console.log(userguess);

    if (userguess.length > 1 || !/[a-z]/.test(userguess)) {
        console.log("invalid value, you will not lose an attempt for this round");
        game();
        return;
    }

    let indexword = wordchoose.indexOf(userguess, 0)
    
    if (indexword > -1) {


        for (indexword; indexword < hidden.length && indexword != -1;) {
            hidden.splice(indexword, 1, userguess)
            indexword = wordchoose.indexOf(userguess, indexword + 1);
            
        }
        if (!hidden.includes('*')) {
            console.log(`good job , you are a champion!`);
            return
        }
        console.log(`you have left ${attempt}, and you revealed ${hidden.join('')}`);


    } else {
        attempt -= 1
        console.log(`you are wrong! you have left ${attempt} rounds, good luck`);

    }
    if (attempt == 0) {
        console.log(`The word is ${wordchoose.join(``)}`);
        console.log(`Game over, you can play again sometime`);
        return
    }
    game()
}


game();

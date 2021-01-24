const input = require(`readline-sync`);
console.log("**************welcome!!!***************\n to the best game , war game 2020!!!! \n ");

const name = input.question("what is your name?: \n ");
let account = 50
console.log("\n good day " + name + " your account balance is "+ account);


const f = input.keyInYN("ready to start? \n ");
if (f != true){
    throw "stop execution" ;
      
}  
function allgame() {
    let ask = input.questionInt(`what is your bet?(max ${account})`)
    if (ask <= 0 || ask > account){
        throw "you entered unacceptable values";
    }

    let compbet = Math.floor(Math.random() * 12)+1;
    let userbet = Math.floor(Math.random() * 12)+1;
    if (compbet < userbet) {
        account += ask;
        console.log(`you won , your balance is ${account}`);
    } else {
        account -= ask;
        console.log(`you lost , your balance is ${account}`);
    }
    if(account == 0 ){
        throw "you are broke!!!!";
    }
    if(input.keyInYN("another round? \n ")){
        allgame()

    } else {
        throw "thanks for playing";  
    }

}
allgame()







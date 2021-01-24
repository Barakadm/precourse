// const input = require('readline-sync');

let total = 1
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log("boom");
    }   
    else if (i % 10 == 7 ) 
    {
        console.log("boom");}
        
    else if ((( i- ( i % 10 )) /10)== 7)  {
        console.log("boom");
        
    } else {
        console.log(i)
    } 

}


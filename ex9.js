const input = require(`readline-sync`);
let n = input.question("enter your number: ");

function prime(n) {
    for (let i = 2;  i < n ;i++ ) {
        if (n % i == 0 ) {
            return false
           }
    }
    return true
}

for (let i = 1 ; i <= n; i++){
    if (prime(i) == true) {
        console.log(i)
    } 
        
}

    
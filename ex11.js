const input = require('readline-sync');

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  // str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        console.log(false + " ,it is not a palindrome");
        throw "stop execution"}   
  
    
  }  
console.log (true +" ,it is a palindrome");
 }
 str = input.question("enter a string: ");

//  palindrome("A man, a plan, a canal. Panama");
palindrome(str);
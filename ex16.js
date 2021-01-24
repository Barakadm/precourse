const { add } = require("mathjs");


function Reverse(array1) {
    var i = 0;
    while (i < array1.length - 1) {
      array1.splice(i, 0, array1.pop());
      i++;
    }
    return array1;
  }
  

  var array1 = [10, 8 ,7 ,5 , 2];
  console.log(array1);
 
  Reverse(array1);

  console.log(array1); 

// prompt x 5 volte di inserimento numero

var num = [];
var somma = 0;

for(var i = 0; i < 5; i++){
  num.push(parseInt(prompt("Enter a Number")))
  console.log(num[i])
  somma += num[i];
  
}

  
  console.log(somma)
//
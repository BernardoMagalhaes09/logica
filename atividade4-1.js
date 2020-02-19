var user = require('readline-sync')

var contador1 = 10
var contador = 0
var x = 1

while(contador1 < 50){
for (x=1;x<=contador1;x++){   
    if (contador1%x==0){
    contador++;
    contador1 = contador1 + 1
    }
}
if (contador==2 && (contador1 % 2) === 0){
  console.log (contador1 + " é número primo e par")   
}else
  console.log (contador1 + " é número primo e ímpar")
}

var user = require('readline-sync')

var result1 = user.question("Escreva uma palavra: ")
var contador = 0
size = result1.length

while(contador < size){
    console.log(result1[contador])
    contador = contador + 1
}
    
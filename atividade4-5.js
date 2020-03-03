var user = require('readline-sync');

lista = []
var r1 = user.questionInt("Digite um numero: ");
while(r1 != '-1'){
    lista.push(r1)
    r1 = user.questionInt("Digite um numero: ")
}
console.log(Math.max.apply(null, lista))
console.log(Math.min.apply(null, lista))
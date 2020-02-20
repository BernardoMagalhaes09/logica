var user = require('readline-sync');

lista = []
var r1 = user.question("Digite um nome: ")
var r2 = user.questionInt("Digite a idade da pessoa: ")

while(r1 != 'final' || 'Final' || 'FINAL'){
    lista.push(r1)
    r1 = user.question("Digite um nome: ")
    if(r1 != 'final')
    r2 = user.questionInt("Digite a idade da pessoa: ")
    if(r1 == 'final'){
    console.log(lista.length)
    }
}

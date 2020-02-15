function sortfunction(a, b){
    return (a - b)
}    

var user = require('readline-sync');

var um = user.question("Digite primeiro número: ");
var dois = user.question("Digite segundo número: ")
var tres = user.question("Digite terceiro número: ")

var numeros = [um, dois, tres]

console.log(numeros.sort(sortfunction))
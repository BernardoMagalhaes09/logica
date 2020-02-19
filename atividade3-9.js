var user = require('readline-sync')

var result1 = user.question("Escreva uma palavra: ")

console.log(result1.split('').reverse().join(''))
var medias = require('notas-universitarias-util')
var usuario = require('readline-sync')

nota1 = usuario.questionFloat('Qual a nota da p1? ')
nota2 = usuario.questionFloat('Qual a nota da p2? ')
nota3 = usuario.questionFloat('Qual a nota da p3? (Se não realizou coloque 0) ')

const notas = {
    g1 : nota1,
    g2 : nota2,
    g3 : nota3
}

console.log(notas)
console.log(medias.default(4).media(notas))


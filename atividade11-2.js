const FasamImc = require('fasam-imc-calc');
var pergunta = require('readline-sync')

peso = pergunta.questionFloat('Qual seu peso? ')
altura = pergunta.questionFloat('Qual seu altura? (ex:1.8)')

const imc = new FasamImc(peso, altura);
console.log('seu IMC é ' + imc.calc())
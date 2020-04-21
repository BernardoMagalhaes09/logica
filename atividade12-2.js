/*Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos. 
Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos com maior idade e imprimir seus nomes.*/

usuario = require('readline-sync')
var alunos = []
var idades = []
var quantidadeDeAlunos = usuario.question('Quantos alunos pretende cadastrar? ')

class Aluno{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

function CadastroAluno(){
    var nome = usuario.question('Qual o nome do aluno? ')
    var idade = usuario.question('Qual a idade do aluno? ')
    return new Aluno(idade, nome)
}

while(quantidadeDeAlunos > 0){
    var aluno = CadastroAluno()
    alunos.push(aluno)
    idades.push(aluno.idade)
    quantidadeDeAlunos--
}

var idadeMaxima = Math.max(...idades)
console.log('A turma possui: ' + alunos.length + ' alunos')
var maiorIdade = idades.filter(idade => {
    if(idade === idadeMaxima){
        return true
    }else{
        return false
    }
})

console.log(maiorIdade)
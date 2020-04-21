var readline = require('readline-sync')
var carro_repositorio = require('./carros-repository')
const cTable = require('C:/Users/Bernardo/Desktop/banco_exemplo/node_modules/console.table');
var db = require('./db')

db.getDb().then(async database => {
    var choice = "";
    var repositorio = carro_repositorio(database);
    do{
        console.log('--------------------------ESCOLHA--------------------------')
        console.log("Insira A para inserir")
        console.log("Insira B para mostrar")
        console.log("Insira C para sair")
        choice = await readline.question("Escolha : ")
        if(choice === "A") {
            console.clear()
            console.log('--------------------------CADASTRO ALUNO--------------------------')
            var carro = {
                nome : readline.question("Insira nome do carro : "),
                cor : readline.question("Insira cor do carro : "),
                ano : readline.questionInt("Insira o ano do carro : "),
                valor : readline.questionInt("Insira o valor do carro : ")
            }
            await repositorio.insereCarro(carro).then(p => {
                console.clear()
                console.log("Carro inserido com sucesso")
            }).catch(p => {
                console.log("Não foi possível inserir o carro")
            })

        } else if(choice === "B"){
            console.clear()
            await repositorio.mostraCarros().then(p => {
                console.log('p: ', p)
                console.table(p)
            })
        } else if(choice !== "C") {
            console.clear()
            console.log("Opção invalida tente novamente ")
            console.log()
        }


    } while(choice !== "C")
});


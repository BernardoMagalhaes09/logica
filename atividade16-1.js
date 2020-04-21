const sqlite3 = require('sqlite3')
var user = require('readline-sync');

let db = new sqlite3.Database('./carros.db', (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log('Conectado ao db carros.')
});

var sql = 'INSERT INTO carro(nome, cor, ano, valor) VALUES(?, ?, ?)'
var  resp = user.question('Você deseja cadastrar um veículo? Remover um veículo? ou Ver veículos?')

if(resp == 'cadastrar'){
    var resp2 = user.question('Insira nome do carro: ')
    if(resp2 )
    var args = []
    db.run(sql, args)
}
var args = []

var db = require('./db')
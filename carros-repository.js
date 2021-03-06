var db = require('./db')

module.exports = function(database) {
    return {
        criaTabela : async function(){
            return new Promise(async (resolve, reject) => {
                await database.run('CREATE TABLE IF NOT EXISTS carros(nome text, cor text, ano integer, valor integer)');
                resolve()
            })
        },
        insereCarro : async function(carro) {
            return new Promise(async (resolve, reject) => {
                await database.run(`INSERT INTO alunos(nome, cor, ano, valor) VALUES(?, ?, ?, ?)`, [carro.nome, carro.cor, carro.ano, carro.valor], function(err) {
                    if (err) {
                        reject(err)
                    }
                    console.log(`Carro inserido com sucesso linha`);
                    //resolve(this.lastID)
                });
            })

        },
        mostraCarros :  async function(){
            return new Promise(async (resolve, reject) => {
                var carros = []
                let sql = 'SELECT * FROM carros';
                var carros = []
                await database.all(sql, [], (err, rows) => {
                    if (err) {
                        reject(err)
                    }
                    rows.forEach((row) => {
                        carros.push({
                            nome : row.nome,
                            cor : row.cor,
                            ano : row.ano,
                            valor : row.valor
                        })
                    });
                    resolve(carros)
                });
            })
        }
    }
}
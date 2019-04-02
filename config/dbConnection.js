var mysql = require('mysql');

module.exports = function(){
    console.log("autoload carregou o modulo de conexão com bd");
    return connMySQL;
}
var connMySQL = function(){
    //conexão com banco mysql
    console.log("conexao com banco foi estabelecida com o banco online");
    return mysql.createConnection({
        host: 'mysql995.umbler.com',
        user: 'bancosmn',
        password: 'smn0K3NOis',
        database: "smn",
        port:41890
    });
}
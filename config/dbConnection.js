var mysql = require('mysql');

module.exports = function(){
    console.log("autoload carregou o modulo de conexão com bd");
    return connMySQL;
}
var connMySQL = function(){
    //conexão com banco mysql
    console.log("conexao com banco foi estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123g'
    });
}
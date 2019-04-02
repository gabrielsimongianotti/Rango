function dadosSmn (connection){
    this._connection = connection;
}
dadosSmn.prototype.salvarUser = function(user,callback){
    console.log(user.email +" salvar noticiasModel");
    this._connection.query("insert into usuario (email, nome, senha) values ('"+user.email+"', '"+user.nome+"','"+user.senha+"');", callback);
    console.log(callback);
    console.log( user);
    console.log("insert into usuario (email, nome, senha) values ('"+user.email+"', '"+user.nome+"','"+user.senha+"');, callback");
}
dadosSmn.prototype.verificarLogin = function(callback){
    this._connection.query("select * from usuario;", callback);
    console.log(callback);
}
module.exports = function(){
    return dadosSmn;
}
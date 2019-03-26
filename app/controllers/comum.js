module.exports.almoco = function(application, req, res){
    var dadosdobanco= {nome: 'Nome do usuario', pratoPrincipal:[['file'],['picanha'],['macarrão']], dia: 12}
    res.render('almoco/cardapio',{dados:dadosdobanco});
}
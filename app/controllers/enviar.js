module.exports.sugestao = function(application, req, res){
    res.render('sugestao/enviar');
}
module.exports.salvar =function(application,req,res){
    //o req.boby é um objeto com as informações do ejs
    console.log(req.body);
    //req.body.sugestao é 
    console.log(req.body.sugestao);
 
    res.redirect('/sugestao');
}
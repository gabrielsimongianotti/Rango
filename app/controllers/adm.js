module.exports.cadastro = function(application, req, res){
   
    res.render('cadastro/cadastroUsuario');
}
module.exports.verificar_e_salvar = function(application, req, res){

    var cadas=[];
    cadas[0]= req.body;

    var connection = application.config.dbConnection();
    var smnModels = new application.app.models.smnModels(connection);

    smnModels.salvarUser(cadas[0],function(error, result){
        console.log(" erro "+error+", result "+result);
        res.redirect('/');
    })

}
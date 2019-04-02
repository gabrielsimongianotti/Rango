module.exports =function(application){
    application.get('/cadastro',function(req, res){
        application.app.controllers.adm.cadastro(application,req,res);
    });

    application.post('/salvar',function(req, res){
        application.app.controllers.adm.verificar_e_salvar(application,req,res);
    });
};
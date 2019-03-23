module.exports =function(application){
    application.get('/cadastro',function(req, res){
        application.app.controllers.adm.cadastro(application,req,res);
    });
};
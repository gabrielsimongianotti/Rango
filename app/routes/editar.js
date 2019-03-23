module.exports =function(application){
    application.get('/editar',function(req, res){
        application.app.controllers.usuario.editar(application,req,res);
    });
};
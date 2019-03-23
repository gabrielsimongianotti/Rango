module.exports =function(application){
    application.get('/sugestao',function(req, res){
        application.app.controllers.enviar.sugestao(application,req,res);
    });
};
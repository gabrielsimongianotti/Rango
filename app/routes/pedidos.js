module.exports =function(application){
    application.get('/pedidos',function(req, res){
        application.app.controllers.geral.pedidos(application,req,res);
    });
};
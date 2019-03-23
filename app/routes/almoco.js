module.exports =function(application){
    application.get('/almoco',function(req, res){
        application.app.controllers.comum.almoco(application,req,res);
    });
};
module.exports =function(application){
    application.get('/',function(req, res){
        application.app.controllers.comum.almoco(application,req,res);
    });
};
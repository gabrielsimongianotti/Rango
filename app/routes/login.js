module.exports =function(application){
    application.get('/',function(req, res){
        application.app.controllers.home.login(application,req,res);
    });

    application.post('/logar',function(req,res){
        application.app.controllers.home.validarLogin(application,req,res);       
    })
};
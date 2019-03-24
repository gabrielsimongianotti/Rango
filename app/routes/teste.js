module.exports =function(application){
    application.post('/testeimg',function(req, res){
        application.app.controllers.img.upload(application,req,res);
    });
};
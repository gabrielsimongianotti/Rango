module.exports.login = function (application, req, res) {
    res.render('login/home', { validacao: '' });
}
module.exports.validarLogin = function (application, req, res) {
 
    console.log(req.body);
    var login = req.body.login;
    var senha = req.body.senha;
    var resposta = "";

    var connection = application.config.dbConnection();
    var smnModels = new application.app.models.smnModels(connection);
    console.log('OK');
    smnModels.verificarLogin(function (error, result) {
        for (var n = 0; n < result.length; n++) {
            console.log(" email " + result[n].email + " senha " + result[n].senha);
            if (login == result[n].email && senha == result[n].senha) {
                res.redirect('/almoco');
            } else if(n==result.length-1) {
                resposta = "login ou senha errados";
                res.render('login/home', { validacao: resposta });
            } 
            
        }
        console.log(" erro " + error + ", result " + result[0].email);

    })


}
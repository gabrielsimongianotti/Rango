module.exports.login = function (application, req, res) {
    res.render('login/home',{validacao : '' });
}
module.exports.validarLogin = function (application, req, res) {
    var dadosdobanco = { login: "ze@smn.com", senha: "123456" };
    console.log(req.body);
    var login = req.body.login;
    var senha = req.body.senha;
    var resposta = "";
    console.log(dadosdobanco.login);
    console.log(dadosdobanco.senha);
    if (dadosdobanco.login == login && dadosdobanco.senha == senha) {
        res.redirect('/almoco');
    } else if (dadosdobanco.login != login && dadosdobanco.senha != senha) {
        resposta = "login e senha errados";
        res.render('login/home', { validacao: resposta });
    } else if (dadosdobanco.login != login) {
        resposta = "login errado";
        res.render('login/home', { validacao: resposta });
    } else if (dadosdobanco.senha != senha) {
        resposta = "senha errada";
        res.render('login/home', { validacao: resposta });
    }

}
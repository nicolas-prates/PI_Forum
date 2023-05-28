var jogosModel = require("../models/jogosModel")

function cadastrarjogo(req, res) {
    var idUsuario = req.params.idUsuario;
    var lista = req.body

    jogosModel.cadastrarjogo(idUsuario, lista).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao cadastrar os jogos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarjogo
}
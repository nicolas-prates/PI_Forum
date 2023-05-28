var threadsModel = require("../models/threadsModel");

function buscar(req, res) {
    var idUsuario = req.params.idUsuario;

    threadsModel.buscar(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarposts(req, res) {
    var idjogo = req.body.idjogo
    var idtopico = req.body.idtopico

    threadsModel.listarposts(idjogo, idtopico).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarpost(req, res) {
    var idpost = req.body.idpost

    threadsModel.listarpost(idpost).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarcomentarios(req, res) {
    var idpost = req.body.idpost

    threadsModel.listarcomentarios(idpost).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function criarpost(req, res) {
    var postbody = req.body.postBody
    var posttitle= req.body.postTitle
    var idjogo = req.body.idjogo
    var idtopico = req.body.idtopico
    var idUsuario = req.body.idUsuario

    threadsModel.criarpost(postbody, posttitle, idjogo, idtopico, idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function criarcomentario(req, res) {
    var comentario = req.body.comentario
    var idpost = req.body.idpost
    var idUsuario = req.body.idUsuario

    threadsModel.criarcomentario(comentario, idpost, idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscar,
    listarposts,
    listarpost,
    listarcomentarios,
    criarpost,
    criarcomentario
}
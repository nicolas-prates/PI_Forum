var express = require("express");
var router = express.Router();

var threadsController = require("../controllers/threadsController");

router.get("/buscar/:idUsuario", function (req, res) {
    threadsController.buscar(req, res);
});

router.post("/listarposts", function (req, res) {
    threadsController.listarposts(req, res);
});

router.post("/listarpost", function (req, res) {
    threadsController.listarpost(req, res);
});

router.post("/criarpost", function (req, res) {
    threadsController.criarpost(req, res);
});

router.post("/listarcomentarios", function (req, res) {
    threadsController.listarcomentarios(req, res);
});

router.post("/criarcomentario", function (req, res) {
    threadsController.criarcomentario(req, res);
});

module.exports=router
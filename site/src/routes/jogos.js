var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.post("/cadastrarjogo/:idUsuario", function (req, res) {
    jogosController.cadastrarjogo(req, res);
});

router.post("/buscar/", function (req, res) {
    jogosController.buscar(req, res);
});

module.exports = router
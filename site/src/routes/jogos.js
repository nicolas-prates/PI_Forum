var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController");

router.post("/cadastrarjogo/:idUsuario", function (req, res) {
    jogosController.cadastrarjogo(req, res);
});

router.get("/buscar", function (req, res) {
    jogosController.buscar(req, res);
});

router.get("/buscar2", function (req, res) {
    jogosController.buscar2(req, res);
});

router.get("/buscar3", function (req, res) {
    jogosController.buscar3(req, res);
});


module.exports = router
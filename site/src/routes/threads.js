var express = require("express");
var router = express.Router();

var threadsController = require("../controllers/threadsController");

router.get("/buscar/:idUsuario", function (req, res) {
    threadsController.buscar(req, res);
});

router.get("/buscar/:idjogo/:idtopico", function (req, res) {
    threadsController.buscar(req, res);
});

module.exports=router
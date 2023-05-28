var express = require("express");
var router = express.Router();

var threadsController = require("../controllers/jogosController");

router.post("/cadastrarjogo/:idUsuario", function (req, res) {
    threadsController.cadastrarjogo(req, res);
});

module.exports = router
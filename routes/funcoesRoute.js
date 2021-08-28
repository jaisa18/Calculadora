const { name } = require("ejs");
const express = require("express");
const router = express.Router();
var funcoesController = require("../controller/funcoesController");

//CREATE
router.get("/add", funcoesController.abreAdd);
router.post("/add", funcoesController.add);

//READ
router.get("/", funcoesController.listar);
router.post("/", funcoesController.listarFiltro);

module.exports = router;

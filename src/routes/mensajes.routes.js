const { Router } = require("express");

const mensajesController = require("../controllers/mensajes.controller")

const router = Router();

router.get("/", mensajesController.getMensaje); //GET MENSAJE

router.post("/contactar", mensajesController.createMensaje); //POST MENSAJE

module.exports = router;
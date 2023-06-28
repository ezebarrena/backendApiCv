const { Router } = require("express");

const mensajesController = require("../controllers/mensajes.controller")

const router = Router();

router.get("/getMensaje/", mensajesController.getMensaje); //GET MENSAJE

router.post("/contactar", mensajesController.createMensaje); //POST MENSAJE

module.exports = router;
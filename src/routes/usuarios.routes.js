const { Router} = require ("express");
//const { check } = require("express-validator");
const usuariosController = require ("../controllers/usuarios.controller")
//const checkFields = require ("..")


const router = Router();

router.get("/", usuariosController.getUsuarios); //GET USUARIOS

//router.get("/:id", usuariosController.getUsuariosById); //GET USUARIOS BY ID

router.post("/", usuariosController.createUsuario); //POST USUARIOS

//router.get("/:id", usuariosController.getUsuariosById); //GET USUARIOS
router.post("/login", usuariosController.login);

module.exports = router;
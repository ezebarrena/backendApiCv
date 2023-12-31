let instance = null;
require('dotenv').config();
const jwt = require("jsonwebtoken");
const UsuariosService = require("../services/usuarios.service");
const AuthService = require('../services/auth.service');

class UsuariosController {

  static getInstance() {
    if (!instance) {
      return new UsuariosController();
    }
    return instance;
  }

  async getUsuarios(req, res) {
    try {
      const users = await UsuariosService.getUsers();
      return res.status(200).json({
        message: "Todos los usuarios",
        users: users,
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "getUsers",
        message: err,
      });
    }
  }


  async createUsuario(req, res) {
    try {
      let newUser = await UsuariosService.createUser(req.body);

      return res.status(201).json({
        message: "Created!",
        usuario: newUser,
        status: 201
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createUsuario",
        message: "Usuario ya existente",
        status: 500
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      let isUserRegistered = await AuthService.hasValidCredentials(email, password);
      if (isUserRegistered) {

        const user = await UsuariosService.getUserByEmail(email);

        const token = jwt.sign(user.toJSON(), process.env.PRIVATE_KEY, {
          expiresIn: "1d",
        });

        return res.status(200).json({
          status: 200,
          token,
          message: "Login successful"
        });

      } else {
        return res.status(401).json({
          message: "Unauthorized.",
          status: 401
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "login",
        message: err.message,
      });
    }
  }
}

module.exports = UsuariosController.getInstance();
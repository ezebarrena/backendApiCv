let instance = null;
const MensajesService = require("../services/mensajes.service");

class MensajesController {

  static getInstance() {
      if (!instance) {
        return new MensajesController();
      }
      return instance;
    }

  async getMensaje(req, res) {
      try {
        const mensajes = await MensajesService.getMensaje();
        return res.status(200).json({
          message: "Todos los mensajes",
          mensaje: mensajes,
          status: 200
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          method: "getMensajes",
          message: err,
        });
      }
  }

  async createMensaje(req, res) {
    try {
      let newMensaje = await MensajesService.createMensaje(req.body);
      return res.status(201).json({
        message: "Created!",
        mensaje: newMensaje,
        status: 201 ,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        method: "createMensaje",
        message: err.message,
        
      });
    }
  }
}

module.exports = MensajesController.getInstance();
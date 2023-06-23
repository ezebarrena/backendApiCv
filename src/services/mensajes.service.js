const MensajesModel = require('../models/Mensajes');

class MensajesService {

    async getMensaje() {
        try {
          const mensajes = await MensajesModel.find();
          return res.status(200).json(mensajes);
        } catch (err) {
          console.error(err);
          return res.status(500).json({
            method: "getMensajes",
            message: err,
          });
        }
    }
  
    async createMensaje(mensaje) {
      try {
        let newMensaje = await MensajesModel.create(mensaje);
      } catch (err) {
        console.error(err);
      }
    }

}



module.exports = new MensajesService();
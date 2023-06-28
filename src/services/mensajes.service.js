const MensajesModel = require('../models/Mensajes');

class MensajesService {
  
    async getMensaje(req,res) {
        try {
          console.log("te paso los msgs")
          const mensajes = await MensajesModel.find();
          console.log(mensajes)
          //res.send({status:"ok",data:mensajes})
          return mensajes;
        } catch (err) {
          console.log(err);
          console.error(err);
          throw new Error("Error in getMensaje Service");
          };
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
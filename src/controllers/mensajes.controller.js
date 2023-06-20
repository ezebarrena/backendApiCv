class MensajesController {

    static getInstance() {
        if (!instance) {
          return new MensajesController();
        }
        return instance;
      }

    async getController(req, res) {
        try {
          const mensajes = await MensajesService.getController();
          return res.status(200).json(mensajes);
        } catch (err) {
          console.error(err);
          return res.status(500).json({
            method: "getMensajes",
            message: err,
          });
        }
    }

}
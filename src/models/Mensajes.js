const mongoose = require('mongoose');
const { Schema } = mongoose;

const MensajesSchema = new Schema({
    nombre:String,
    email:String,
    telefono: String,
    texto:String
});

const Mensajes = mongoose.model('Mensajes',MensajesSchema);

module.exports = Mensajes;
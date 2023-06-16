const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () =>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('DB online!');
    }
    catch(err){
        console.error(err);
        throw new Error('Error en la conexión de la BD');
    }
}

module.exports = {dbConnection};
const UsuariosModel = require('../models/Usuarios');
const bcrypt = require('bcrypt');

class UsuariosService{

    async getUsers() {
        try {
          const users = await UsuariosModel.find();
          return users;
        } catch (err) {
          console.error(err);
          throw new Error("Error in getUsers Service");
        }
      }
      
      /*capaz no es necesario*/
      async getUserByEmail(email) {
        try {
          let user = await UsuariosModel.findOne({email});
          return user;
        } catch (err) {
          console.error(err);
          throw new Error("Error in getUserById Service");
        }
      }
      

      async createUser(user) {
        try {

          let isUserRegistered = await UsuariosModel.findOne({email:user.email});
          if(isUserRegistered){
            throw new Error("User already registered");
          }
          else{
            user.password = bcrypt.hashSync(user.password,process.env.SALT);
            await UsuariosModel.create(user);
            return user;
        }
        } catch (err) {
          console.error(err);
          throw new Error("Error in createUser Service");
        }
      }
}

module.exports = new UsuariosService();
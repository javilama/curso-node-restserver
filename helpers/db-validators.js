const Role = require('../models/roles');
const User = require('../models/user');


const esRoleValid = async(role = '')=>{
    const existeRole = await Role.findOne({role});
    if (!existeRole) {
      throw new Error(`El rol ${role} no existe`);
    }
 }

 //verificar si el correo existe.
 const emailExist = async (email = '') => {
    const emailExt = await User.findOne({email});
        if (emailExt) {
            throw new Error(`El email: ${email} ya existe`);
        }
 }
 
//verificar si existe un usuario por ID.
const userByIdExist = async (id = '') => {
  const userId = await User.findById(id);
      if (!userId) {
          throw new Error(`El usuario con ID ${id} no existe`);
      }
}

 

 module.exports={
    esRoleValid,
    emailExist,
    userByIdExist
 }
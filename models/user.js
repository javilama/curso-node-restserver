
const {Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
 
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, ' El email es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatorio'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    state: {
        type: Boolean,
        default:true
    },
    google: {
        type: Boolean,
        default:true
    },


});

//remover el password y el id_version de la respuesta
UsuarioSchema.methods.toJSON = function() {
    const {__v, password, ...user} = this.toObject();
    return user;
}



module.exports= model('User', UsuarioSchema);


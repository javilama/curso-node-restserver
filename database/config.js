
const mongoose = require('mongoose');


const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGO_CONNECT,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );

        console.log('¡Base de Datos Online!')
        
    } catch (error) {
        console.log(error)
        throw new error ('Error al iniciar la DB')
    }
  
}


module.exports={
    dbConnection
}
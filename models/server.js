const express = require("express");
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT ||3000;
    this.usuariosRoutePath = '/api/usuarios';

    //conectar a la DB

    this.connectDB();

    // Middlewares
    this.middlewares();
    // Rutas de la aplicacion
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {

    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    
    this.app.use(this.usuariosRoutePath, require('../routes/usuarios.routes'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = Server;

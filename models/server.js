const express          = require('express');
const { createServer } = require('http');
const { sequelize }    = require('../database/connection');
const app              = express();

class Server {

    constructor() {
        this.app          = express();
        this.port         = process.env.PORT;
        this.conexionHttp = process.env.CONEXION_CON_HTTP;

        // Si va a haber interacción con una página web, creamos el servidor
        if ( this.conexionHttp  === '1' ) {
            this.server = createServer( this.app );
        }
        
        // Conectamos con la base de datos
        this.conectarBD();
   
    }

    async conectarBD() {
        try {
            await sequelize.authenticate()
            console.log('Connection has been established successfully.')
        } catch (error) {
            console.log('Unable to connect to the database.', error);
        }
    }

    listen() {
        this.app.listen( this.port );
    }

}

module.exports = Server;
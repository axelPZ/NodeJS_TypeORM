
import express, { Application } from 'express';
import cors from 'cors';
import morgan = require('morgan');
import { createConnection } from 'typeorm';

import userRoutes from '../rutes/user';


class Server {

    public app:Application;
    public port: string;
    public paths:any;

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '';
        this.paths = {
            user : '/api/users'
        }

        this.middleware();
        this.connection();
        this.routes();
    }


    connection(){
        createConnection();
    }

    // middleware
    middleware(){

        // cors
        this.app.use( cors() );

        // Tipo de dato que urilizara el cors
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public') );

        // morgan
        this.app.use( morgan('dev'));
    }


    routes(){
        var rutas = this.app.use( this.paths.user, userRoutes );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en el puerto http://localhost:' + this.port );
        });
    }
}

module.exports = Server;
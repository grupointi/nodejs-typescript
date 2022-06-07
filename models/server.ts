import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import productRoutes from '../routes/producto';
import 'dotenv/config'
import cors from 'cors';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
      usuarios: '/api/usuarios',
      productos: '/api/productos',
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        // conexion mediante Sequelize
        this.dbConnection();
        // parsear, cors y definir carpeta estatica o sitio web
        this.middlewares();
        // definir rutas
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log(error)
        }

    }

    middlewares() {
        // CORS solicitud desde distintos origenes, peticiones cross domain
        this.app.use( cors() );
        // Lectura del body, parsea el body de las request
        this.app.use( express.json() );
        // Servir sitio o contenido front-end
        this.app.use( express.static('public') );
    }

    routes() {
      this.app.use( this.apiPaths.usuarios, userRoutes ),
      this.app.use( this.apiPaths.productos, productRoutes )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }
}

export default Server;
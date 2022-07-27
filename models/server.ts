import express from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';


class Server{
    private app: express.Application;
    private port: string;

    private apiPath = {
        usuarios: '/api/usuarios',
    }

    constructor(){
        this. app = express();
        this.port = process.env.PORT || '8081';

        //DB conexion
        this.dbConnection();

        // LLamar middlewares
        this.middlewares();

        // Definir mis rutas
        this.routes();
    }

    // TODO: conectar DB
    async dbConnection(){
        try {
            await db.authenticate();
            console.log('DB online');
        } catch ( error: any ) {
            throw new Error( error )
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors({}) ) 

        // Lectura deel body: parseo del body
        this.app.use( express.json());
        // Carpeta publica
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.apiPath.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

// Exportar por defecto
export default Server;
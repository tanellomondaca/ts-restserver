import express from 'express';
import userRoutes from '../routes/usuario';


class Server{
    private app: express.Application;
    private port: string;

    private apiPath = {
        usuarios: '/api/usuarios',
    }

    constructor(){
        this. app = express();
        this.port = process.env.PORT || '8081';

        // Definir mis rutas
        this.routes();
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
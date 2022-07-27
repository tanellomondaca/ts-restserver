import express from 'express';


class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        this. app = express();
        this.port = process.env.PORT || '8081';
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }
}

// Exportar por defecto
export default Server;
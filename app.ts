import dotenv from 'dotenv';
import Server from './models/server';

// Configurar variables de entorno
dotenv.config();

const server = new Server();

// Iniciar servidor
server.listen();